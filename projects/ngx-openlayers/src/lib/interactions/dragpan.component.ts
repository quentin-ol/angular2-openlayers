import { Component, OnDestroy, OnInit, Input } from '@angular/core';
import { DragPan } from 'ol/interaction';
import Kinetic from 'ol/Kinetic';
import { MapComponent } from '../map.component';
import { Condition } from 'ol/events/condition';

@Component({
  selector: 'aol-interaction-dragpan',
  template: '',
})
export class DragPanInteractionComponent implements OnInit, OnDestroy {
  instance: DragPan;

  @Input()
  condition: Condition;
  @Input()
  kinetic: Kinetic;
  @Input()
  onFocusOnly: boolean;

  constructor(private map: MapComponent) {}

  ngOnInit() {
    this.instance = new DragPan(this);
    this.map.instance.addInteraction(this.instance);
  }

  ngOnDestroy() {
    this.map.instance.removeInteraction(this.instance);
  }
}
