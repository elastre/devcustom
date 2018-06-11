import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DashboardComponent} from "./components/dashboard/dashboard.component";
import {LoginpageComponent} from "./components/loginpage/loginpage.component";
import {RegisterpageComponent} from "./components/registerpage/registerpage.component";
import {NotfoundpageComponent} from "./components/notfoundpage/notfoundpage.component";


const routes: Routes = [
  {path:"", component: LoginpageComponent},
  {path:"login", component: LoginpageComponent},
  {path:"dashboard", component: DashboardComponent},
  {path:"register",component: RegisterpageComponent},
  {path:"**", component: NotfoundpageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
