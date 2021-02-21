import { Injectable } from '@angular/core';

//importing User interface
import { User } from "../Interfaces/User";
@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  constructor() { }
  
  userList :User[]=[];
  
  getTotal(){
    this.userList.length;
  }
  add(user :User){
    this.userList.push(user);
    //console.log(product);
    
  }
  remove(user :User){
     this.userList =  this.userList.filter(curr => {return curr.name != user.name } );
    //  console.log(this.cart);
  }
  
}
