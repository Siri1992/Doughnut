import { Component, OnInit, Input } from '@angular/core';
//import {ImageZoomModule} from 'angular2-image-zoom';

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.css']
})
export class FoodComponent implements OnInit {
 // smallImageSrc="http://localhost:4200/assets/library_01.jpeg"

 images
  constructor() {

      this.images = [
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
 
   setSelectedImage(image){
      this.selectedImage= image;	
   }


}
