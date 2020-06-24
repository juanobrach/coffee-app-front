import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { addProduct, State  } from '../core/store';
import { Product} from '../core/models/Product';

@Component({
  selector: 'app-personalization',
  templateUrl: './personalization.component.html',
  styleUrls: ['./personalization.component.scss']
})
export class PersonalizationComponent implements OnInit {
  product$: Observable<Product>;
  icon;
  regularPrice;

  constructor(private store: Store<{ order: State }>) { 
    this.product$ = store.select( state => state.order.product);
    console.log('this.product$:', this.product$)
  }

  ngOnInit(): void {
    this.product$.subscribe( product => {
      this.icon = product.icon;
      console.log('product:', product.price)
      this.regularPrice = product.price;
    })
  }

  addProduct() {
    // this.store.dispatch(addProduct());
  }

}
