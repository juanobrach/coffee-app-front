import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../core/services';
import {Product} from './../core/models/Product';
import { Store } from '@ngrx/store';
import { setIngredientSelected  } from '../core/store';
import { Order } from './../core/models/Order';
import { Observable } from 'rxjs';
import { AppData } from '../core/models/AppData';

@Component({
  selector: 'app-extra-ingredients',
  templateUrl: './extra-ingredients.component.html',
  styleUrls: ['./extra-ingredients.component.scss']
})
export class ExtraIngredientsComponent implements OnInit {
  order$: Observable<Order>;
  appData$: Observable<AppData>;

  ingredients: Product[] = [];
  ingredientsSelected: string[] = [];

  constructor( 
    private service: ProductsService,
    private store: Store<{ order: Order }>,
    private appData: Store<{ appData: AppData }>
    ) {
    this.order$ = store.select( state => state.order );
    this.appData$ = appData.select( state => state.appData );

   }

  setIngredientSelected(ingredient){
    this.store.dispatch(setIngredientSelected({ingredient}));
  }

  ngOnInit(): void {
    this.order$.subscribe( order => {
      this.ingredientsSelected = order.extras;
      console.log('this.ingredientsSelected:', this.ingredientsSelected)
    })

    this.appData$.subscribe( appData => {
      console.log('appData:', appData)
      this.ingredients = appData.ingredients;
    })
  }

}
