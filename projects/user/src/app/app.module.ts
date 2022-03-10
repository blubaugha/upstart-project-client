import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from '@upstart/user/app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreLibModule } from '@upstart/core-lib';
import { StylesLibModule } from '@upstart/styles-lib';
import { AssetsLibModule } from '@upstart/assets-lib';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CoreLibModule,
    StylesLibModule,
    AssetsLibModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
