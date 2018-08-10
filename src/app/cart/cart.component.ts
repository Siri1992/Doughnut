import { Component, OnInit } from '@angular/core';
import {CartService} from '../cart.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
subscription:Subscription
  constructor(private cartService:CartService) {
    
    
   }

  ngOnInit() {
   
  }

}
