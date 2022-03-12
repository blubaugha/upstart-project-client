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
import { LoanNavLinkListComponent } from './components/loan-nav-link-list/loan-nav-link-list.component';
import { LoanService } from './services/loan.service';
import { LoanNavBlockListComponent } from './components/loan-nav-block-list/loan-nav-block-list.component';
import { MatCardModule } from '@angular/material/card';
import { PopularLoansCardComponent } from './components/popular-loans-card/popular-loans-card.component';
import { loanRouteLoaderProvider } from './providers/loan-route-loader.provider';
import { ConsolidateDebtComponent } from './components/consolidate-debt/consolidate-debt.component';
import { PayOffCreditCardsComponent } from './components/pay-off-credit-cards/pay-off-credit-cards.component';
import { AutoRefinanceComponent } from './components/auto-refinance/auto-refinance.component';
import { OtherLoanComponent } from './components/other-loan/other-loan.component';

const svgResolverConfig: SvgIconResolverConfig = {
  baseUrl: 'assets/images'
};

const components = [
  AppComponent,
  NavbarComponent,
  AppHeaderComponent,
  AppFooterComponent,
  AppSidenavComponent,
  LoanNavLinkListComponent,
  LoanNavBlockListComponent,
  PopularLoansCardComponent,
  ConsolidateDebtComponent,
  PayOffCreditCardsComponent,
  AutoRefinanceComponent,
  OtherLoanComponent
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
  }, loanRouteLoaderProvider],
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
    private loanService: LoanService) {
  }
}
