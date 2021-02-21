import { Component, Input, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';






@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

export class ListComponent implements OnInit {

   @Input() productList : {id:number,name :string}[]=[];
   productsAll : {id:number,name :string}[] = this.productService.getAllProducts();

  constructor(private productService :ProductService) { }

  ngOnInit(): void {
  }

  add(product :{id:number,name :string}){
    this.productList.push(product);
    //console.log(product);
    
  }
  remove(product :{id:number,name :string}){

    this.productList.splice(this.productList.indexOf(product), 1);
  }
  clear(){
    this.productList=[];
  }
  getSize()  {
    return this.productList.length;
  }
  
  
    

}
