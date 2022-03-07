import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatSliderModule } from '@angular/material/slider';
import { MatRippleModule } from '@angular/material/core';
import { MatStepperModule } from '@angular/material/stepper';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import { MainFooterComponent } from './components/main-footer/main-footer.component';
import { MainHeaderComponent } from './components/main-header/main-header.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RootComponent } from './components/root/root.component';
import { LogoComponent } from './components/logo/logo.component';

const components = [
  RootComponent,
  NavbarComponent,
  LogoComponent,
  MainHeaderComponent,
  MainFooterComponent
];

const angularMaterialModules = [
  MatButtonModule,
  MatSliderModule,
  MatRippleModule,
  MatStepperModule,
  MatIconModule
];

@NgModule({
  declarations: [
    ...components
  ],
  imports: [
    HttpClientModule,
    ...angularMaterialModules
  ],
  exports: [
    ...angularMaterialModules,
    ...components
  ]
})
export class CoreLibModule {
}
