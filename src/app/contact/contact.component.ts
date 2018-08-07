import { Component, OnInit } from '@angular/core';
import { MatTabsModule, MatGridListModule } from '@angular/material';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  background = 'primary';
  
  constructor() { }

  ngOnInit() {
  }

}
