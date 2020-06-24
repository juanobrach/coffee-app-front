import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { setDrinkSize, State  } from '../core/store';

@Component({
  selector: 'app-drink-size',
  templateUrl: './drink-size.component.html',
  styleUrls: ['./drink-size.component.scss']
})
export class DrinkSizeComponent implements OnInit {
  @Input() regularPrice;
  largePrice;

  constructor(private store: Store<{ order: State }>) {}

  ngOnInit(): void {
    this.largePrice = this.regularPrice * 2;
  }

  selectDrinkSize(size){
    this.store.dispatch(setDrinkSize({ size}));
  }

}
