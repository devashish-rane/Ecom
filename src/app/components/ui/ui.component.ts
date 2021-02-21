import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/Interface/Product';

//importing services for cart
import { CartService } from "../../services/cart.service";

import { ProductService } from "../../services/product.service";

@Component({
  selector: 'app-ui',
  templateUrl: './ui.component.html',
  styleUrls: ['./ui.component.css']
})
export class UiComponent implements OnInit {

  constructor(private  cartService: CartService) { }

  productList : Product[] = [];
  
  
  ngOnInit(): void {
  }


 

}
