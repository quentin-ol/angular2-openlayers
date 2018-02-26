import { Host, Input, OnDestroy, OnInit } from '@angular/core';
import { source } from 'openlayers';
import AttributionLike = ol.AttributionLike;
import {LayerComponent} from '../layers/layer.component';

export class SourceComponent implements OnInit, OnDestroy {
  public instance: source.Source;
  public componentType: string = 'source';

  @Input() attributions: AttributionLike;

  constructor(@Host() protected host: LayerComponent) {
  }

  ngOnInit() {
    this.host.instance.setSource(this.instance);
  }

  ngOnDestroy() {
    this.host.instance.setSource(null);
  }
}
