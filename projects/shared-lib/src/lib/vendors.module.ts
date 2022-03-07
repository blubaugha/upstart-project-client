import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatSliderModule } from '@angular/material/slider';
import { MatRippleModule } from '@angular/material/core';
import { MatStepperModule } from '@angular/material/stepper';

const angularMaterialModules = [
  MatButtonModule,
  MatSliderModule,
  MatRippleModule,
  MatStepperModule
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
