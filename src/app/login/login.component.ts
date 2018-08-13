import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  userevent(e){
    e.preventDefault();
    let username = e.target.elements[0].value;
    let password = e.target.elements[1].value;
    
    if(username == 'admin@admin.com' && password == 'admin'){
      this.router.navigate(['/food'])
    }else {
      this.router.navigate(['/error'])
    }
  }

}
