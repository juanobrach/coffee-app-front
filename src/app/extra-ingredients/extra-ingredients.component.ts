import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../core/services';
import {Product} from './../core/models/Product';
import { Store } from '@ngrx/store';
import { setIngredientSelected  } from '../core/store';
import { Order } from './../core/models/Order';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-extra-ingredients',
  templateUrl: './extra-ingredients.component.html',
  styleUrls: ['./extra-ingredients.component.scss']
})
export class ExtraIngredientsComponent implements OnInit {
  order$: Observable<Order>;
  ingredients: Product[] = [];
  ingredientsSelected: string[] = [];

  constructor( private service: ProductsService, private store: Store<{ order: Order }> ) {
    this.order$ = store.select( state => state.order );
    service.getIngredients().subscribe( ( data: Product[] ) => {
      console.log('data:', data)
      this.ingredients = data;
    });
   }

  setIngredientSelected(ingredient){
    this.store.dispatch(setIngredientSelected({ingredient}));
  }

  ngOnInit(): void {
    this.order$.subscribe( order => {
      this.ingredientsSelected = order.extras;
      console.log('this.ingredientsSelected:', this.ingredientsSelected)
    })
  }

}
