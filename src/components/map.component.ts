import {
  Component, OnInit, ElementRef, Input, Output, EventEmitter, AfterViewInit,
  SimpleChanges, OnChanges, QueryList, ContentChildren, forwardRef
} from '@angular/core';
import {
  Map, MapBrowserEvent, MapEvent, render, ObjectEvent, control,
  interaction
} from 'openlayers';
import { LayerComponent, LayersHelper } from './layers';

@Component({
  selector: 'aol-map',
  template: `<div [style.width]="width" [style.height]="height"></div><ng-content></ng-content>`
})

export class MapComponent implements OnInit, AfterViewInit, OnChanges {
  public instance: Map;
  public componentType: string = 'map';

  @ContentChildren(LayerComponent, {descendants: true}) childrenLayers: QueryList<LayerComponent>;

  @Input() width: string = '100%';
  @Input() height: string = '100%';
  @Input() pixelRatio: number;
  @Input() keyboardEventTarget: Element|string;
  @Input() loadTilesWhileAnimating: boolean;
  @Input() loadTilesWhileInteracting: boolean;
  @Input() logo: string|boolean;
  @Input() renderer: 'canvas'|'webgl';


  @Output() onClick: EventEmitter<MapBrowserEvent>;
  @Output() onDblClick: EventEmitter<MapBrowserEvent>;
  @Output() onMoveEnd: EventEmitter<MapEvent>;
  @Output() onPointerDrag: EventEmitter<MapBrowserEvent>;
  @Output() onPointerMove: EventEmitter<MapBrowserEvent>;
  @Output() onPostCompose: EventEmitter<render.Event>;
  @Output() onPostRender: EventEmitter<MapEvent>;
  @Output() onPreCompose: EventEmitter<render.Event>;
  @Output() onPropertyChange: EventEmitter<ObjectEvent>;
  @Output() onSingleClick: EventEmitter<MapBrowserEvent>;

  // we pass empty arrays to not get default controls/interactions because we have our own directives
  controls: control.Control[] = [];
  interactions: interaction.Interaction[] = [];

  constructor(private host: ElementRef) {
    this.onClick = new EventEmitter<MapBrowserEvent>();
    this.onDblClick = new EventEmitter<MapBrowserEvent>();
    this.onMoveEnd = new EventEmitter<MapEvent>();
    this.onPointerDrag = new EventEmitter<MapBrowserEvent>();
    this.onPointerMove = new EventEmitter<MapBrowserEvent>();
    this.onPostCompose = new EventEmitter<render.Event>();
    this.onPostRender = new EventEmitter<MapEvent>();
    this.onPreCompose = new EventEmitter<render.Event>();
    this.onPropertyChange = new EventEmitter<ObjectEvent>();
    this.onSingleClick = new EventEmitter<MapBrowserEvent>();
  }

  ngOnInit() {
    // console.log('creating ol.Map instance with:', this);
    this.instance = new Map(this);
    this.instance.setTarget(this.host.nativeElement.firstElementChild);
    this.instance.on('click', (event: MapBrowserEvent) => this.onClick.emit(event));
    this.instance.on('dblclick', (event: MapBrowserEvent) => this.onDblClick.emit(event));
    this.instance.on('moveend', (event: MapEvent) => this.onMoveEnd.emit(event));
    this.instance.on('pointerdrag', (event: MapBrowserEvent) => this.onPointerDrag.emit(event));
    this.instance.on('pointermove', (event: MapBrowserEvent) => this.onPointerMove.emit(event));
    this.instance.on('postcompose', (event: render.Event) => this.onPostCompose.emit(event));
    this.instance.on('postrender', (event: MapEvent) => this.onPostRender.emit(event));
    this.instance.on('precompose', (event: render.Event) => this.onPreCompose.emit(event));
    this.instance.on('propertychange', (event: ObjectEvent) => this.onPropertyChange.emit(event));
    this.instance.on('singleclick', (event: MapBrowserEvent) => this.onSingleClick.emit(event));
  }

  ngOnChanges(changes: SimpleChanges) {
    let properties: { [index: string]: any } = {};
    if (!this.instance) {
      return;
    }
    for (let key in changes) {
      if (changes.hasOwnProperty(key)) {
        properties[key] = changes[key].currentValue;
      }
    }
    // console.log('changes detected in aol-map, setting new properties: ', properties);
    this.instance.setProperties(properties, false);
  }

  ngAfterViewInit() {
    this.instance.updateSize();

    // Update layers when new layers are added/moved/removed
    this.childrenLayers.changes.subscribe(
      () => LayersHelper.updateLayers(
        this.instance.getLayers(),
        // Filter is a temporary fix waiting for https://github.com/angular/angular/issues/10098
        this.childrenLayers.filter(l => l.host === this)
      )
    );
    // Initialization: add all the layers
    // Filter is a temporary fix waiting for https://github.com/angular/angular/issues/10098
    this.childrenLayers.filter(l => l.host === this).forEach((layer) => {
      this.instance.getLayers().push(layer.instance);
    });
  }
}
