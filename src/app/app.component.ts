import { Component } from '@angular/core';
import { ProductsService } from './core/services';
import { Product } from './core/models/Product';
import { AppData } from './core/models/AppData';

import { Store } from '@ngrx/store';
import { setIngredients, setProducts  } from './core/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'coffeeApp';

  constructor( private service: ProductsService, private store: Store<{ appData: AppData }> ){
    service.getProducts().subscribe( ( data: Product[] ) => {
      this.store.dispatch(setProducts({ products: data}));
    });

    service.getIngredients().subscribe( ( data: Product[] ) => {
      this.store.dispatch(setIngredients({ ingredients: data}));
    });


  }
}
