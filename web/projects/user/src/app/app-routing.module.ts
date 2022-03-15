import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditUserFormComponent, PopularLoansCardComponent } from '@upstart/core-lib';
import { LoginComponent } from 'projects/core-lib/src/lib/components/login/login.component';

const routes: Routes = [{
  path: '',
  component: PopularLoansCardComponent
}, {
  path: 'user',
  component: EditUserFormComponent
}, {
  path: 'login',
  component: LoginComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
