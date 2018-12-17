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

  constructor(public host: LayerGroupComponent | MapComponent) {
  }

  ngOnInit() {
    if (this.precompose !== null && this.precompose !== undefined) {
      this.instance.on('precompose', this.precompose);
    }
    if (this.postcompose !== null && this.postcompose !== undefined) {
      this.instance.on('postcompose', this.postcompose);
    }
  }

  ngOnDestroy() {
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


export class LayersHelper {
  /**
   * Update OpenLayers layers (from a Map or a LayerGroup for example) from a given LayerComponent list.
   * It helps to keep OpenLayers natural orders after adding, deleting and moving layers
   * @param {ol.Collection<ol.layer.Base>} olLayers
   * @param {LayerComponent[]} viewLayers
   */
  static updateLayers(olLayers: ol.Collection<ol.layer.Base>, viewLayers: LayerComponent[]) {
    viewLayers.forEach((layer, index) => {
      let olIndex = olLayers.getArray().indexOf(layer.instance);
      if (olIndex < 0) {
        // New layer: we add it to the map
        olLayers.insertAt(index, layer.instance);
        // console.log(`~~ updateLayers: new layer at pos ${index}`, layer.instance);
      } else if (index !== olIndex) {
        // layer has moved inside the layers list
        olLayers.removeAt(olIndex);
        olLayers.insertAt(index, layer.instance);
        // console.log(`~~ updateLayers: existing layer at pos ${olIndex} moving to pos ${index}`, layer.instance);
      }
    });
    // Remove the layers that have disapeared from childrenLayers
    if (olLayers.getLength() > viewLayers.length) {
      for (let i = viewLayers.length; i < olLayers.getLength(); i++) {
        olLayers.removeAt(i);
        // console.log(`~~ updateLayers: remove layer at pos ${i}`);
      }
    }
  }
}
