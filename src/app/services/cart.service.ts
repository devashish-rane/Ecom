import { Injectable } from '@angular/core';
import { Observable ,of} from 'rxjs';
import { Product } from '../Interface/Product';



@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart :Product[] =[];



  constructor() { }
}
