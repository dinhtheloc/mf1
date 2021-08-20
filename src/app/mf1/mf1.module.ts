import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Mf1RoutingModule } from './mf1-routing.module';
import { Mf1Component } from './mf1.component';


@NgModule({
  declarations: [
    Mf1Component
  ],
  imports: [
    CommonModule,
    Mf1RoutingModule
  ]
})
export class Mf1Module { }
