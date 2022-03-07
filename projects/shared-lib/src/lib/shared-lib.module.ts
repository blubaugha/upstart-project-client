import { NgModule } from '@angular/core';
import { VendorsModule } from './vendors.module';
import { RootComponent } from './components/root/root.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';

const components = [
  RootComponent,
  ToolbarComponent
];

@NgModule({
  declarations: [
    ...components,
    ToolbarComponent
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
