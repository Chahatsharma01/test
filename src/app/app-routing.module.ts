import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { TableComponent } from './table/table.component';

const routes: Routes = [
{
  path:'',
  component:LoginComponent
},
{
  path:'signup',
  component:SignupComponent
},
{
  path:'table',
  component:TableComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
