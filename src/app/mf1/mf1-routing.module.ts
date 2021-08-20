import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Mf1Component } from './mf1.component';

const routes: Routes = [{
  path: '',
  component: Mf1Component,
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Mf1RoutingModule { }
