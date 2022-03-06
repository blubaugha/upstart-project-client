import { NgModule } from '@angular/core';
import { VendorsModule } from './vendors.module';



@NgModule({
  declarations: [],
  imports: [
    VendorsModule
  ],
  exports: [
    VendorsModule
  ]
})
export class SharedLibModule { }
