import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/Interface/Product';
import { ProductService } from 'src/app/services/product.service';






@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

export class ListComponent implements OnInit {

   @Input() productList : Product[]=[];
   productsAll : Product[] = this.productService.getAllProducts();

  constructor(private productService :ProductService) { }

  ngOnInit(): void {
  }

  add(product :Product){
    this.productList.push(product);
    //console.log(product);
    
  }
  remove(product :Product){

    this.productList.splice(this.productList.indexOf(product), 1);
  }
  clear(){
    this.productList=[];
  }
  getSize()  {
    return this.productList.length;
  }
  
  
    

}
