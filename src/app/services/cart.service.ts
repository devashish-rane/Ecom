import { Injectable } from '@angular/core';
import { Observable ,of} from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart :{id:number,name :string}[] =[];

  // add(product :{id:number,name :string}){
  //   this.cart.push(product);
  //   //console.log(product);
    
  // }
  // remove(product :{id:number,name :string}){
  //    this.cart =  this.cart.filter(curr => {return curr.id != product.id } );
  //   //  console.log(this.cart);
  // }
  // clear(){
  //   this.cart=[];
  // }
  // getSize()  {
  //   return this.cart.length;
  // }

  constructor() { }
}
