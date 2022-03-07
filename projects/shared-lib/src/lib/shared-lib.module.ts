import { NgModule } from '@angular/core';
import { VendorsModule } from './vendors.module';
import { RootComponent } from './components/root/root.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LogoComponent } from './components/logo/logo.component';
import { MainHeaderComponent } from './components/main-header/main-header.component';
import { MainFooterComponent } from './components/main-footer/main-footer.component';
import { HttpClientModule } from '@angular/common/http';

const components = [
  RootComponent,
  NavbarComponent,
  LogoComponent,
  MainHeaderComponent,
  MainFooterComponent
];

@NgModule({
  declarations: [
    ...components
  ],
  imports: [
    HttpClientModule,
    VendorsModule
  ],
  exports: [
    VendorsModule,
    ...components
  ]
})
export class SharedLibModule {
}
