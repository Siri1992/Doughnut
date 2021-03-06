import { Component, OnInit , OnDestroy} from '@angular/core';
import {Router} from '@angular/router';
import {CartService} from '../cart.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
 total:any;
 subscription:Subscription;
  constructor(private router:Router, private cartService:CartService) { 
    
  }

  ngOnInit() {
    //alert();
   this.subscription= this.cartService.getTotal().subscribe((res)=>{
    console.log(res);
      this.total = res.length;
      console.log(res.length);
    });
  }
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }


  }
