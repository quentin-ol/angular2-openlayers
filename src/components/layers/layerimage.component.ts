import {
  Component, EventEmitter, forwardRef, Input, OnChanges, OnInit, Optional,
  SimpleChanges
} from '@angular/core';
import { Extent, layer, source } from 'openlayers';
import { MapComponent } from '../map.component';
import { LayerComponent } from './layer.component';
import { LayerGroupComponent } from './layergroup.component';

@Component({
  selector: 'aol-layer-image',
  template: `<ng-content></ng-content>`,
  providers: [{provide: LayerComponent, useExisting: forwardRef(() => LayerImageComponent) }]
})
export class LayerImageComponent extends LayerComponent implements OnInit, OnChanges {
  public source: source.Image;

  @Input() opacity: number;
  @Input() visible: boolean;
  @Input() extent: Extent;
  @Input() minResolution: number;
  @Input() maxResolution: number;
  @Input() zIndex: number;

  constructor(map: MapComponent,
              @Optional() group?: LayerGroupComponent) {
    super(group || map);
  }

  ngOnInit() {
    this.instance = new layer.Image(this);
    super.ngOnInit();
  }

  ngOnChanges(changes: SimpleChanges) {
    super.ngOnChanges(changes);
  }
}
