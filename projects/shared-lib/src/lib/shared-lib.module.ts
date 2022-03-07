import { NgModule } from '@angular/core';
import { VendorsModule } from './vendors.module';
import { RootComponent } from './components/root/root.component';
import { MainToolbarComponent } from './components/main-toolbar/main-toolbar.component';
import { MainMenuComponent } from './components/main-menu/main-menu.component';

const components = [
  RootComponent,
  MainToolbarComponent,
  MainMenuComponent
];

@NgModule({
  declarations: [
    ...components,
    MainToolbarComponent
  ],
  imports: [
    VendorsModule
  ],
  exports: [
    VendorsModule,
    ...components
  ]
})
export class SharedLibModule {
}
