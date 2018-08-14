import { Component, OnInit, OnDestroy } from '@angular/core';
import {CartService} from '../cart.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items: any[] = [];
  subscription:Subscription;
  total:any
  
  constructor(private cartService:CartService) {
   // this.items = JSON.parse(localStorage.getItem('items'));
    //console.log(this.items[0].url)
   }

   ngOnInit() {
    this.items = JSON.parse(localStorage.getItem('items'));
     console.log(this.items)
    
   };


   removeItemFromCart(item:any){
     
     this.cartService.removeItem(item);
     console.log(item)
}

}
