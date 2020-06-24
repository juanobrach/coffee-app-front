import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import {
  ProductsService
} from './services';

import {
  orderReducer
} from './store';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    StoreModule.forRoot({ order: orderReducer })
  ],
  providers: [
    ProductsService
  ]
})
export class CoreModule { }
