import { Component, OnInit } from '@angular/core';

//importing icons font awesome
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }
  faShoppingCart = faShoppingCart;
  ngOnInit(): void {
  }

}
