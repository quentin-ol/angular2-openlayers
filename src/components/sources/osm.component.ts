import { Component, Host, forwardRef, Input, AfterContentInit } from '@angular/core';
import { source, AttributionLike, TileLoadFunctionType } from 'openlayers';
import { SourceComponent } from './source.component';
import { SourceXYZComponent } from './xyz.component';
import {LayerTileComponent} from '../layers/layertile.component';

@Component({
  selector: 'aol-source-osm',
  template: `<div class="aol-source-osm"></div>`,
  providers: [
    { provide: SourceComponent, useExisting: forwardRef(() => SourceOsmComponent) }
  ]
})
export class SourceOsmComponent extends SourceXYZComponent implements AfterContentInit {
  instance: source.OSM;

  @Input() attributions: AttributionLike;
  @Input() cacheSize: number;
  @Input() crossOrigin: string;
  @Input() maxZoom: number;
  @Input() opaque: boolean;
  @Input() reprojectionErrorThreshold: number;
  @Input() tileLoadFunction: TileLoadFunctionType;
  @Input() url: string;
  @Input() wrapX: boolean;

  constructor(@Host() layer: LayerTileComponent) {
    super(layer);
  }

  ngAfterContentInit() {
    if (this.tileGridXYZ) {
      this.tileGrid = this.tileGridXYZ.instance;
    }
    this.instance = new source.OSM(this);
    this.host.instance.setSource(this.instance);
  }
}
