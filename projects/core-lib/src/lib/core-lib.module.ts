import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatSliderModule } from '@angular/material/slider';
import { MatOptionModule, MatRippleModule } from '@angular/material/core';
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
import { UserFormComponent } from 'projects/core-lib/src/lib/components/user-form/user-form.component';
import { MatRadioModule } from '@angular/material/radio';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { LoginComponent } from './components/login/login.component';
import { UserService } from 'projects/core-lib/src/lib/services/user.service';
import {
  UserAddressFormComponent
} from 'projects/core-lib/src/lib/components/user-address-form/user-address-form.component';
import { SERVER_API_CONFIG, ServerApiConfig } from 'projects/core-lib/src/lib/services/server-api-config';
import { UserStatusDialogComponent } from './components/user-status-dialog/user-status-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { EditUserFormComponent } from './components/edit-user-form/edit-user-form.component';

const serverApiConfig: ServerApiConfig = {
  baseUrl: 'http://localhost:6140/api/v1'
};

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
  OtherLoanComponent,
  UserFormComponent,
  UserAddressFormComponent,
  LoginComponent,
  UserStatusDialogComponent,
  EditUserFormComponent
];

const angularModules = [
  FormsModule,
  ReactiveFormsModule
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
  MatCardModule,
  MatRadioModule,
  MatFormFieldModule,
  MatOptionModule,
  MatSelectModule,
  MatInputModule,
  MatDialogModule
];

@NgModule({
  declarations: [
    ...components
  ],
  providers: [{
    provide: SERVER_API_CONFIG, useValue: serverApiConfig
  }, {
    provide: SVG_ICON_RESOLVER_CONFIG, useValue: svgResolverConfig
  }, loanRouteLoaderProvider],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
    ...angularModules,
    ...angularMaterialModules
  ],
  exports: [
    ...angularModules,
    ...angularMaterialModules,
    ...components
  ]
})
export class CoreLibModule {
  constructor(
    private svgIconResolverService: SvgIconResolverService,
    private userService: UserService,
    private loanService: LoanService) {
  }
}
