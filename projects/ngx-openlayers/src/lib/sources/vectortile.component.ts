import { Component, Host, Input, forwardRef, ContentChild, AfterContentInit } from '@angular/core';
import { VectorTile } from 'ol/source';
import Feature from 'ol/format/Feature';
import TileGrid from 'ol/tilegrid/TileGrid';
import { LayerVectorTileComponent } from '../layers/layervectortile.component';
import { FormatComponent } from '../formats/format.component';
import { TileGridComponent } from '../tilegrid.component';
import { SourceComponent } from './source.component';
import { ProjectionLike } from 'ol/proj';
import { UrlFunction } from 'ol/Tile';

@Component({
  selector: 'aol-source-vectortile',
  template: ` <ng-content></ng-content> `,
  providers: [{ provide: SourceComponent, useExisting: forwardRef(() => SourceVectorTileComponent) }],
})
export class SourceVectorTileComponent extends SourceComponent implements AfterContentInit {
  public instance: VectorTile;
  @Input()
  cacheSize: number;
  @Input()
  overlaps: boolean;
  @Input()
  projection: ProjectionLike;
  @Input()
  tilePixelRatio: number;
  @Input()
  tileUrlFunction: UrlFunction;
  @Input()
  url: string;
  @Input()
  urls: string[];
  @Input()
  wrapX: boolean;

  @ContentChild(FormatComponent)
  formatComponent: FormatComponent;
  format: Feature;
  @ContentChild(TileGridComponent)
  tileGridComponent: TileGridComponent;
  tileGrid: TileGrid;

  constructor(@Host() layer: LayerVectorTileComponent) {
    super(layer);
  }

  /* need the children to construct the OL3 object */
  ngAfterContentInit() {
    this.format = this.formatComponent.instance;
    this.tileGrid = this.tileGridComponent.instance;
    // console.log('creating ol.source.VectorTile instance with:', this);
    this.instance = new VectorTile(this);
    this.host.instance.setSource(this.instance);
  }
}
