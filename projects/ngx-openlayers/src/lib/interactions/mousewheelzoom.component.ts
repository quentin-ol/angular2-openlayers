import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { MouseWheelZoom } from 'ol/interaction';
import { MapComponent } from '../map.component';

@Component({
  selector: 'aol-interaction-mousewheelzoom',
  template: '',
})
export class MouseWheelZoomInteractionComponent implements OnInit, OnDestroy {
  instance: MouseWheelZoom;
  @Input()
  duration: number;
  @Input()
  timeout: number;
  @Input()
  useAnchor: boolean;
  @Input()
  onFocusOnly: boolean;

  constructor(private map: MapComponent) {}

  ngOnInit() {
    this.instance = new MouseWheelZoom(this);
    this.map.instance.addInteraction(this.instance);
  }

  ngOnDestroy() {
    this.map.instance.removeInteraction(this.instance);
  }
}
