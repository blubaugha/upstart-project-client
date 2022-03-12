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
import { SvgIconResolverService } from './services/svg-icon-resolver.service';
import { SVG_ICON_RESOLVER_CONFIG, SvgIconResolverConfig } from './services/svg-icon-resolver-config';
import { AppSidenavComponent } from './components/app-sidenav/app-sidenav.component';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { RouterModule } from '@angular/router';
import { FeatureNavLinkListComponent } from './components/feature-nav-link-list/feature-nav-link-list.component';
import { FeatureService } from './services/feature.service';
import { FeatureSetComponent } from './components/feature-set/feature-set.component';
import { FeatureNavBlockListComponent } from './components/feature-nav-block-list/feature-nav-block-list.component';
import { MatCardModule } from '@angular/material/card';

const svgResolverConfig: SvgIconResolverConfig = {
  baseUrl: 'assets/images'
};

const components = [
  AppComponent,
  NavbarComponent,
  AppHeaderComponent,
  AppFooterComponent,
  AppSidenavComponent,
  FeatureSetComponent,
  FeatureNavLinkListComponent,
  FeatureNavBlockListComponent
];

const angularMaterialModules = [
  MatButtonModule,
  MatSliderModule,
  MatRippleModule,
  MatStepperModule,
  MatIconModule,
  MatSidenavModule,
  MatToolbarModule,
  MatListModule,
  MatCardModule
];

@NgModule({
  declarations: [
    ...components
  ],
  providers: [{
    provide: SVG_ICON_RESOLVER_CONFIG, useValue: svgResolverConfig
  }],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
    ...angularMaterialModules
  ],
  exports: [
    ...angularMaterialModules,
    ...components
  ]
})
export class CoreLibModule {
  constructor(
    private svgIconResolverService: SvgIconResolverService,
    private featuresService: FeatureService) {
  }
}
