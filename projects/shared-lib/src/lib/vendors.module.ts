import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatSliderModule } from '@angular/material/slider';
import { MatRippleModule } from '@angular/material/core';

const angularMaterialModules = [
  MatButtonModule,
  MatSliderModule,
  MatRippleModule
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
export class VendorsModule {
}
