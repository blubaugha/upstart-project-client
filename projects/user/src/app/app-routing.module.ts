import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeatureNavBlockListComponent } from '@upstart/core-lib';

const routes: Routes = [{
  path: '',
  component: FeatureNavBlockListComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
