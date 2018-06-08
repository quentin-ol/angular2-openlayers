import { OnDestroy, OnInit, OnChanges, Input, SimpleChanges } from '@angular/core';
import { layer, Extent } from 'openlayers';
import { MapComponent } from '../map.component';
import { LayerGroupComponent } from './layergroup.component';

export abstract class LayerComponent implements OnInit, OnChanges, OnDestroy {
  public instance: any;
  public componentType: string = 'layer';

  @Input() opacity: number;
  @Input() visible: boolean;
  @Input() extent:	Extent;
  @Input() zIndex:	number;
  @Input() minResolution: number;
  @Input() maxResolution: number;

  @Input() precompose: (evt: ol.events.Event) => void;
  @Input() postcompose: (evt: ol.events.Event) => void;

  constructor(protected host: LayerGroupComponent | MapComponent) {
  }

  ngOnInit() {
    if (this.precompose !== null && this.precompose !== undefined) {
      this.instance.on('precompose', this.precompose);
    }
    if (this.postcompose !== null && this.postcompose !== undefined) {
      this.instance.on('postcompose', this.postcompose);
    }
    this.host.instance.getLayers().push(this.instance);
  }

  ngOnDestroy() {
    this.host.instance.getLayers().remove(this.instance);
  }

  ngOnChanges(changes: SimpleChanges) {
    let properties: { [index: string]: any } = {};
    if (!this.instance) {
      return;
    }
    for (let key in changes) {
      if (changes.hasOwnProperty(key)) {
        properties[key] = changes[key].currentValue;
        if (key === 'precompose') {
          this.instance.un('precompose', changes[key].previousValue)
          this.instance.on('precompose', changes[key].currentValue);
        }
        if (key === 'postcompose') {
          this.instance.un('postcompose', changes[key].previousValue)
          this.instance.on('postcompose', changes[key].currentValue);
        }
      }
    }
    // console.log('changes detected in aol-layer, setting new properties: ', properties);
    this.instance.setProperties(properties, false);
  }
}
