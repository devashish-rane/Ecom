import { Injectable } from '@angular/core';
import { Product } from '../Interface/Product';

let data: Product[] =  [
  {
    id:1,
    name:"dev"
  },{
    id:2,
    name:"=mac"
  },{
    id:3,
    name:"anu"
  }
]

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  
  product =data;

  getAllProducts(){
    return this.product;
  }
  constructor() { }
}
