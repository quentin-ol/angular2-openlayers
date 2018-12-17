import {
  Component, OnDestroy, OnInit, SkipSelf, Inject, Optional, ViewChildren, QueryList,
  AfterViewInit, ContentChildren, forwardRef
} from '@angular/core';
import { layer } from 'openlayers';
import { LayersHelper, LayerComponent } from './layer.component';
import { MapComponent } from '../map.component';

@Component({
  selector: 'aol-layer-group',
  template: `<ng-content></ng-content>`,
  providers: [{provide: LayerComponent, useExisting: forwardRef(() => LayerGroupComponent) }]
})
export class LayerGroupComponent extends LayerComponent implements AfterViewInit, OnInit, OnDestroy {
  public instance: ol.layer.Group;

  @ContentChildren(LayerComponent, {descendants: true}) childrenLayers: QueryList<LayerComponent>;

  constructor(map: MapComponent,
              @SkipSelf() @Optional() group?: LayerGroupComponent) {
    super(group || map);
  }

  ngOnInit() {
    // console.log(`creating ol.layer.Group instance with:`, this);
    this.instance = new layer.Group(this);
    super.ngOnInit();
  }

  ngAfterViewInit() {
    // console.log('layerGroup.AfterViewInit', this.childrenLayers);
    // Update layers when new layers are added/moved/removed
    this.childrenLayers.changes.subscribe(
      () => LayersHelper.updateLayers(
        this.instance.getLayers(),
        // Filter is a temporary fix waiting for https://github.com/angular/angular/issues/10098
        this.childrenLayers.filter(l => l.host === this)
      )
    );
    // Initialization: add all the children layers
    // Filter is a temporary fix waiting for https://github.com/angular/angular/issues/10098
    this.childrenLayers.filter(l => l.host === this).forEach((layer) => {
      this.instance.getLayers().push(layer.instance);
    });
  }
}
