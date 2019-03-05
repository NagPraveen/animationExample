import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DetailComponent } from './detail/detail.component';

const routes: Routes = [
  {path:'',component:HomeComponent,data: {depth: 1}},
  {path:'dashboard',component:DashboardComponent,data: {depth: 2}},
  {path:'detail',component:DetailComponent,data: {depth: 3}},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
