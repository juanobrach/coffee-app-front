import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/Product';


@Injectable()

export class ProductsService {
  private products: Product[] = [];

  SERVER_URL = 'http://localhost:3000/api';
  constructor( private httpClient: HttpClient ) {}

  getProducts(){
    return this.httpClient.get( `${this.SERVER_URL}/products` );
  }

  getIngredients(){
    return this.httpClient.get( `${this.SERVER_URL}/products/extras` );
  }
}
