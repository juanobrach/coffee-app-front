import { Component, OnInit, HostBinding } from '@angular/core';
import { trigger, transition, query, style, stagger, animate } from '@angular/animations';
import { ProductsService } from '../core/services';
import { Product } from '../core/models/Product';
import { Order } from '../core/models/Order';

import { Store } from '@ngrx/store';
import { addProduct  } from '../core/store';
import { Observable } from 'rxjs';
import { AppData } from '../core/models/AppData';

@Component({
  selector: 'app-selection',
  templateUrl: './selection.component.html',
  styleUrls: ['./selection.component.scss'],
})
export class SelectionComponent implements OnInit {
  appData$: Observable<AppData>
  products: Product[] = [];

  constructor( 
    private service: ProductsService,
    private store: Store<{ order: Order }>,
    private appData: Store<{ appData: AppData}>
    ) {
      this.appData$ = appData.select( state => state.appData );
   }

   
   ngOnInit(): void {
    this.appData$.subscribe( appData => {
      console.log('appData:', appData)
      this.products = appData.products;
    })
  }

  selectDrink(drink) {
    this.store.dispatch(addProduct({ product: drink}));
  }

}
