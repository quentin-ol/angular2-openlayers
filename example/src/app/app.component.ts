import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public zoom: number = 15;
	public opacity: number = 1.0;
  public show: boolean = false;

  increaseZoom(){
  	this.zoom  = Math.min(this.zoom + 1, 18);
  	console.log('zoom: ', this.zoom);
  }
  decreaseZoom(){
  	this.zoom  = Math.max(this.zoom - 1, 1);
  	console.log('zoom: ', this.zoom);
  }

  increaseOpacity(){
  	this.opacity  = Math.min(this.opacity + 0.1, 1);
  	console.log('opacity: ', this.opacity);
  }
  decreaseOpacity(){
  	this.opacity  = Math.max(this.opacity - 0.1, 0);
  	console.log('opacity: ', this.opacity);
  }

  showPopup(){
    this.show = true;
  }
  hidePopup(){
    this.show = false;
  }
}
