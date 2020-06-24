import { Component, OnInit, HostBinding } from '@angular/core';
import { trigger, transition, query, style, stagger, animate } from '@angular/animations';
import { ProductsService } from '../core/services';
import { Product } from '../core/models/Product';

import { Store } from '@ngrx/store';
import { addProduct, State  } from '../core/store';

@Component({
  selector: 'app-selection',
  templateUrl: './selection.component.html',
  styleUrls: ['./selection.component.scss'],
})
export class SelectionComponent implements OnInit {
  products: Product[] = [];

  constructor(private service: ProductsService, private store: Store<{ order: State }>) {
      service.getProducts().subscribe( ( data: Product[] ) => {
          this.products = data;
      });
   }

  ngOnInit(): void {
  }

  selectDrink(drink) {
    console.log('drink:', drink)
    this.store.dispatch(addProduct({ product: drink}));
  }

}
