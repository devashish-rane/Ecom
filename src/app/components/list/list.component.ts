import { Component, OnInit } from '@angular/core';

//importing services for cart
import { CartService } from "../../services/cart.service";

let data: { id: number, name: string }[] =  [
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


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

export class ListComponent implements OnInit {

 productList : {id:number,name :string}[] = data;
  constructor(private  cartService: CartService) { }
  ngOnInit(): void {
  }


  addToCart(currentProduct : {id:number,name :string}){
      this.cartService.add(currentProduct);
      console.log(this.cartService.cart);  
  }
  deleteFromCart(currentProduct : {id:number,name :string}){
    this.cartService.remove(currentProduct);
    console.log(this.cartService.cart);  
  }

  

}
