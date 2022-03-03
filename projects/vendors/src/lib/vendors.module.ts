import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatSliderModule } from '@angular/material/slider';

const angularMaterialModules = [
  MatButtonModule,
  MatSliderModule
];

@NgModule({
  declarations: [],
  imports: [
    ...angularMaterialModules
  ],
  exports: [
    ...angularMaterialModules
  ]
})
export class VendorsModule { }
