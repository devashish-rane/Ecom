import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CartService } from "./services/cart.service";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SliderComponent } from './components/slider/slider.component';
import { ListComponent } from './components/list/list.component';
import { from } from 'rxjs';
import { UiComponent } from './components/ui/ui.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { PremiumComponent } from './components/premium/premium.component';
import { AboutComponent } from './components/about/about.component';
import { SellComponent } from './components/sell/sell.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SliderComponent,
    ListComponent,
    UiComponent,
    CategoriesComponent,
    PremiumComponent,
    AboutComponent,
    SellComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [CartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
