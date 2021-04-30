import { OnDestroy, OnInit, OnChanges, Input, SimpleChanges, Directive, Component, Injectable } from '@angular/core';
import { Event } from 'ol/events';
import { MapComponent } from '../map.component';
import { LayerGroupComponent } from './layergroup.component';
import { Extent } from 'ol/extent';

@Directive()
export abstract class LayerComponent implements OnInit, OnChanges, OnDestroy {
  public instance: any;
  public componentType = 'layer';

  @Input()
  opacity: number;
  @Input()
  visible: boolean;
  @Input()
  extent: Extent;
  @Input()
  zIndex: number;
  @Input()
  minResolution: number;
  @Input()
  maxResolution: number;

  @Input()
  prerender: (evt: Event) => void;
  @Input()
  postrender: (evt: Event) => void;

  constructor(protected host: MapComponent | LayerGroupComponent) {}

  ngOnInit() {
    if (this.prerender !== null && this.prerender !== undefined) {
      this.instance.on('prerender', this.prerender);
    }
    if (this.postrender !== null && this.postrender !== undefined) {
      this.instance.on('postrender', this.postrender);
    }
    this.host.instance.getLayers().push(this.instance);
  }

  ngOnDestroy() {
    this.host.instance.getLayers().remove(this.instance);
  }

  ngOnChanges(changes: SimpleChanges) {
    const properties: { [index: string]: any } = {};
    if (!this.instance) {
      return;
    }
    for (const key in changes) {
      if (changes.hasOwnProperty(key)) {
        properties[key] = changes[key].currentValue;
        if (key === 'prerender') {
          this.instance.un('prerender', changes[key].previousValue);
          this.instance.on('prerender', changes[key].currentValue);
        }
        if (key === 'postrender') {
          this.instance.un('postrender', changes[key].previousValue);
          this.instance.on('postrender', changes[key].currentValue);
        }
      }
    }
    // console.log('changes detected in aol-layer, setting new properties: ', properties);
    this.instance.setProperties(properties, false);
  }
}
