import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { MovielistComponent } from './movielist/movielist.component';
import { MoviedetailComponent } from './moviedetail/moviedetail.component';

const routes: Routes = [
  {path:"register",component:RegisterComponent},
  
  {path:"movies",component:MovielistComponent},
  {path:"movies/:id",component:MoviedetailComponent},
  {path:"",component:LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
