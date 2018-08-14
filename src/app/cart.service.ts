import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import {Subject} from 'rxjs';
import { FoodComponent } from './food/food.component';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  public items: FoodComponent[] = [];
  public total = new Subject<any>();
  public cartItems = new Subject<any>();
  public cartState=this.cartItems.asObservable();
  constructor() {
    
   }

  getTotal(){
    console.log(this.items);
    return this.total.asObservable();
  }
  // calcTotal(){
  //   let sum=0;
  //   this.items.forEach(item=>{
  //     sum+=item.amount
  //   })
  //   return sum;
  // }
  addItem(item:any){
    this.items.push(item);

    this.total.next(this.items);
    localStorage.setItem('items',JSON.stringify(this.items));
    sessionStorage.setItem('items',JSON.stringify(this.items))
  }

  removeItem(item:any){
  this.items.splice(item,1)
  }
}
