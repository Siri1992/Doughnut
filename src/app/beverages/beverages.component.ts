import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-beverages',
  templateUrl: './beverages.component.html',
  styleUrls: ['./beverages.component.css']
})
export class BeveragesComponent implements OnInit {
beveragesImages;
  constructor() {
    this.beveragesImages=[
      {"url":"../../assets/library_01.jpeg","title":"title1","description":"description1","price":"$20"},
      {"url":"../../assets/library_02.jpeg","title":"title2","description":"description2","price":"$30"},
      {"url":"../../assets/library_03.jpeg","title":"title3","description":"description3","price":"$40"},
      {"url":"../../assets/library_04.jpeg","title":"title4","description":"description4","price":"$50"},
      {"url":"../../assets/library_05.jpeg","title":"title5","description":"description5","price":"$60"},
      {"url":"../../assets/camping_04.jpg","title":"title6","description":"description6","price":"$70"},
      {"url":"../../assets/camping_01.jpeg","title":"title7","description":"description7","price":"$80"},
      {"url":"../../assets/camping_02.jpeg","title":"title8","description":"description8","price":"$90"},
      {"url":"../../assets/camping_03.jpeg","title":"title9","description":"description9","price":"$100"},
      
          ];
   }

  ngOnInit() {
  }

  @Input() datasource;
  selectedImage;

  setSelectedBeveragesItem(beveragesImage){
    this.selectedImage=beveragesImage;

  }

}
