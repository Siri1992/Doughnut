import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import {Subject} from 'rxjs';
import { FoodComponent } from './food/food.component';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private items: FoodComponent[] = [];
  private total = new Subject<any>();

  constructor() { }

  getTotal(){
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
  }
}
