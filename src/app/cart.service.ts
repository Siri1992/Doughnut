import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import { FoodComponent } from './food/food.component';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private items: FoodComponent[] = [];
  private total = new BehaviorSubject<number>(0);

  constructor() { }

  getTotal(){
    return this.total.asObservable()
  }
  calcTotal(){
    let sum=0;
    this.items.forEach(item=>{
      sum+=item.amount
    })
    return sum;
  }
  addItem(item:any){
    this.items.push[item];
    this.total.next(this.calcTotal());
  }
}
