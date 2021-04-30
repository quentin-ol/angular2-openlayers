import { Input, OnDestroy, Directive, Component, Injectable } from '@angular/core';
import { Source } from 'ol';

import { LayerComponent } from '../layers/layer.component';

@Directive()
export abstract class SourceComponent implements OnDestroy {
  public instance: Source;
  public componentType = 'source';

  @Input()
  attributions: any;

  constructor(protected host: LayerComponent) {}

  ngOnDestroy() {
    if (this.host && this.host.instance) {
      this.host.instance.setSource(null);
    }
  }

  protected _register(s: Source) {
    if (this.host) {
      this.host.instance.setSource(s);
    }
  }
}
