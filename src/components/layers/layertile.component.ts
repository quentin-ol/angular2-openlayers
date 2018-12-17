import {
  Component, OnDestroy, OnInit, Input, Optional, OnChanges,
  SimpleChanges, forwardRef
} from '@angular/core';
import { layer, source } from 'openlayers';
import { MapComponent } from '../map.component';
import { LayerComponent } from './layer.component';
import { LayerGroupComponent } from './layergroup.component';

@Component({
  selector: 'aol-layer-tile',
  template: `<ng-content></ng-content>`,
  providers: [{provide: LayerComponent, useExisting: forwardRef(() => LayerTileComponent) }]
})
export class LayerTileComponent extends LayerComponent implements OnInit, OnDestroy, OnChanges {
  public source: source.Tile;

  @Input() preload: number;
  @Input() useInterimTilesOnError: boolean;

  constructor(map: MapComponent,
              @Optional() group?: LayerGroupComponent) {
    super(group || map);
  }

  ngOnInit() {
    // console.log('creating ol.layer.Tile instance with:', this);
    this.instance = new layer.Tile(this);
    super.ngOnInit();
  }

  ngOnChanges(changes: SimpleChanges) {
    super.ngOnChanges(changes);
  }
}
