import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { TopbarComponent } from './topbar/topbar.component';
import { AboutComponent } from './about/about.component';
import { FoodComponent } from './food/food.component';
import { BeveragesComponent } from './beverages/beverages.component';
import { CateringComponent } from './catering/catering.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import {ImageZoomModule} from 'angular2-image-zoom';

const appRoutes: Routes = [
  { path:'', component:HomeComponent},
  { path: 'about', component: AboutComponent },
  { path: 'food', component: FoodComponent },
  { path: 'beverages', component: BeveragesComponent },
  { path: 'catering', component: CateringComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: '**', component: HomeComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    TopbarComponent,
    AboutComponent,
    FoodComponent,
    BeveragesComponent,
    CateringComponent,
    ContactComponent,
    LoginComponent,
    RegisterComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    ImageZoomModule, 
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports:[FoodComponent]


})
export class AppModule { }
