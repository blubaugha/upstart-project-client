import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatSliderModule } from '@angular/material/slider';
import { MatRippleModule } from '@angular/material/core';
import { MatStepperModule } from '@angular/material/stepper';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import { AppFooterComponent } from './components/app-footer/app-footer.component';
import { AppHeaderComponent } from './components/app-header/app-header.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AppComponent } from './components/app/app.component';
import { LogoComponent } from './components/logo/logo.component';
import { SvgIconResolverService } from './services/svg-icon-resolver/svg-icon-resolver.service';
import { SVG_ICON_RESOLVER_CONFIG, SvgIconResolverConfig } from './services/svg-icon-resolver/svg-icon-resolver-config';

const svgResolverConfig: SvgIconResolverConfig = {
  baseUrl: 'assets/svg'
};

const components = [
  AppComponent,
  NavbarComponent,
  LogoComponent,
  AppHeaderComponent,
  AppFooterComponent
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
  providers: [{
    provide: SVG_ICON_RESOLVER_CONFIG, useValue: svgResolverConfig
  }],
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
  constructor(private svgIconResolverService: SvgIconResolverService) {
  }
}
