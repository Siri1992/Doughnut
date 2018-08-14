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
//alert();
    if(this.items.indexOf(item)!==-1){
      return;
    }
    this.items.push(item);
    this.total.next(this.items);
    localStorage.setItem('items',JSON.stringify(this.items));
    
  } 
  removeItem(item:any){
      //   alert("i am delete");
    this.items.splice(item,1);
  //console.log(this.items)
  this.total.next(this.items);
  localStorage.clear();
  }
}
