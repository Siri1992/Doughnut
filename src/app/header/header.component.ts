import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { FoodComponent } from '../food/food.component';
import {CartService} from '../cart.service';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
 total:any;
  constructor(private router:Router, private cartService:CartService) { 
    this.total= cartService.getTotal;
  }

  ngOnInit() {
  }


  }
