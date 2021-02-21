import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CartService } from "./services/cart.service";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SliderComponent } from './components/slider/slider.component';
import { ListComponent } from './components/list/list.component';
import { from } from 'rxjs';
import { AuthComponent } from './components/auth/auth.component';

//importing font awesome
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SliderComponent,
    ListComponent,
    AuthComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule

  ],
  providers: [CartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
