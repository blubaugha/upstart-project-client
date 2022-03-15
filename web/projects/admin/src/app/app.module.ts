import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreLibModule } from '@upstart/core-lib';
import { StylesLibModule } from '../../../styles-lib/src/lib/styles-lib.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CoreLibModule,
    StylesLibModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
