import {
  Component,
  OnInit,
  ElementRef,
  Input,
  Output,
  EventEmitter,
  AfterViewInit,
  SimpleChanges,
  OnChanges,
} from '@angular/core';
import Map from 'ol/Map';
import MapBrowserEvent from 'ol/MapBrowserEvent';
import MapEvent from 'ol/MapEvent';
import ObjectEvent from 'ol/Object';
import RenderEvent from 'ol/render/Event';
import { Control } from 'ol/control';
import { Interaction } from 'ol/interaction';

@Component({
  selector: 'aol-map',
  template: `
    <div [style.width]="width" [style.height]="height" [attr.tabindex]="tabindex"></div>
    <ng-content></ng-content>
  `,
})
export class MapComponent implements OnInit, AfterViewInit, OnChanges {
  public instance: Map;
  public componentType = 'map';

  @Input()
  width = '100%';
  @Input()
  height = '100%';
  @Input()
  pixelRatio: number;
  @Input()
  keyboardEventTarget: Element | string;
  @Input()
  loadTilesWhileAnimating: boolean;
  @Input()
  loadTilesWhileInteracting: boolean;
  @Input()
  logo: string | boolean;
  @Input()
  renderer: 'canvas' | 'webgl';
  @Input()
  tabindex: number = null;

  @Output()
  olClick: EventEmitter<MapBrowserEvent>;
  @Output()
  dblClick: EventEmitter<MapBrowserEvent>;
  @Output()
  moveStart: EventEmitter<MapEvent>;
  @Output()
  moveEnd: EventEmitter<MapEvent>;
  @Output()
  pointerDrag: EventEmitter<MapBrowserEvent>;
  @Output()
  pointerMove: EventEmitter<MapBrowserEvent>;
  @Output()
  onpostrender: EventEmitter<RenderEvent>;
  @Output()
  postRender: EventEmitter<MapEvent>;
  @Output()
  onprerender: EventEmitter<RenderEvent>;
  @Output()
  propertyChange: EventEmitter<ObjectEvent>;
  @Output()
  singleClick: EventEmitter<MapBrowserEvent>;

  // we pass empty arrays to not get default controls/interactions because we have our own directives
  controls: Control[] = [];
  interactions: Interaction[] = [];

  constructor(private host: ElementRef) {
    this.olClick = new EventEmitter<MapBrowserEvent>();
    this.dblClick = new EventEmitter<MapBrowserEvent>();
    this.moveStart = new EventEmitter<MapEvent>();
    this.moveEnd = new EventEmitter<MapEvent>();
    this.pointerDrag = new EventEmitter<MapBrowserEvent>();
    this.pointerMove = new EventEmitter<MapBrowserEvent>();
    this.onpostrender = new EventEmitter<RenderEvent>();
    this.postRender = new EventEmitter<MapEvent>();
    this.onprerender = new EventEmitter<RenderEvent>();
    this.propertyChange = new EventEmitter<ObjectEvent>();
    this.singleClick = new EventEmitter<MapBrowserEvent>();
  }

  ngOnInit() {
    // console.log('creating ol.Map instance with:', this);
    this.instance = new Map(this);
    this.instance.setTarget(this.host.nativeElement.firstElementChild);
    this.instance.on('click', (event: MapBrowserEvent) => this.olClick.emit(event));
    this.instance.on('dblclick', (event: MapBrowserEvent) => this.dblClick.emit(event));
    this.instance.on('movestart', (event: MapEvent) => this.moveStart.emit(event));
    this.instance.on('moveend', (event: MapEvent) => this.moveEnd.emit(event));
    this.instance.on('pointerdrag', (event: MapBrowserEvent) => this.pointerDrag.emit(event));
    this.instance.on('pointermove', (event: MapBrowserEvent) => this.pointerMove.emit(event));
    this.instance.on('postrender', (event: RenderEvent) => this.onpostrender.emit(event));
    this.instance.on('postrender', (event: MapEvent) => this.postRender.emit(event));
    this.instance.on('prerender', (event: RenderEvent) => this.onprerender.emit(event));
    this.instance.on('propertychange', (event: ObjectEvent) => this.propertyChange.emit(event));
    this.instance.on('singleclick', (event: MapBrowserEvent) => this.singleClick.emit(event));
  }

  ngOnChanges(changes: SimpleChanges) {
    const properties: { [index: string]: any } = {};
    if (!this.instance) {
      return;
    }
    for (const key in changes) {
      if (changes.hasOwnProperty(key)) {
        properties[key] = changes[key].currentValue;
      }
    }
    // console.log('changes detected in aol-map, setting new properties: ', properties);
    this.instance.setProperties(properties, false);
  }

  ngAfterViewInit() {
    this.instance.updateSize();
  }
}
