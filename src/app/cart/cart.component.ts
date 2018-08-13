import { Component, OnInit } from '@angular/core';
import {CartService} from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items: any[] = [];
  
  constructor(private cartService:CartService) {
   // this.items = JSON.parse(localStorage.getItem('items'));
    //console.log(this.items[0].url)
   }

   ngOnInit() {
    this.items = JSON.parse(localStorage.getItem('items'));
     console.log(this.items[0].url)
    
   }

   removeItemFromCart(item:any): void {
    this.cartService.removeItem(item);
}

}
