import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../core/services';
import {Product} from './../core/models/Product';

@Component({
  selector: 'app-extra-ingredients',
  templateUrl: './extra-ingredients.component.html',
  styleUrls: ['./extra-ingredients.component.scss']
})
export class ExtraIngredientsComponent implements OnInit {
  ingredients: Product[] = [];

  constructor( private service: ProductsService ) {
    service.getIngredients().subscribe( ( data: Product[] ) => {
      this.ingredients = data;
  });
   }

  ngOnInit(): void {
  }

}
