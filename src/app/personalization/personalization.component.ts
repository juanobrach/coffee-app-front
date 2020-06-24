import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { addProduct  } from '../core/store';
import { Product} from '../core/models/Product';
import { Order} from '../core/models/Order';



@Component({
  selector: 'app-personalization',
  templateUrl: './personalization.component.html',
  styleUrls: ['./personalization.component.scss']
})
export class PersonalizationComponent implements OnInit {
  product$: Observable<Product>;
  order$: Observable<any>;

  icon;
  regularPrice;
  drinkSize;
  totalPrice;

  constructor(private store: Store<{ order: Order }>) { 
    this.product$ = store.select( state => state.order.product);
    this.order$ = store.select( state => state.order );
  }

  ngOnInit(): void {
    this.product$.subscribe( product => {
      this.icon = product.icon;
      this.regularPrice = product.price;
    })

    this.order$.subscribe( order => {
      this.drinkSize = order.size;
      this.totalPrice = order.total;
    })


  }

}
