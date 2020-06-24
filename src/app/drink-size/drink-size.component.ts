import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { setDrinkSize  } from '../core/store';
import { Order } from './../core/models/Order';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-drink-size',
  templateUrl: './drink-size.component.html',
  styleUrls: ['./drink-size.component.scss']
})
export class DrinkSizeComponent implements OnInit {
  order$: Observable<Order>;
  @Input() regularPrice;
  largePrice;
  drinkSize = 'regular';



  constructor(private store: Store<{ order: Order }>) {
    this.order$ = store.select( state => state.order );
  }
  
  ngOnInit(): void {
    this.largePrice = this.regularPrice * 2;
    this.order$.subscribe( order => {
      this.drinkSize = order.size;
    })
  }

  selectDrinkSize(size){
    this.store.dispatch(setDrinkSize({size}));
  }

}
