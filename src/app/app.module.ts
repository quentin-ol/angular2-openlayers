import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {AngularOpenlayersModule} from 'ngx-openlayers';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app.routing';
import {ClusterComponent} from './cluster/cluster.component';
import {BasicComponent} from './basic/basic.component';
import {RasterComponent} from './raster/raster.component';

@NgModule({
  declarations: [
    AppComponent,
    BasicComponent,
    ClusterComponent,
    RasterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    AngularOpenlayersModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
