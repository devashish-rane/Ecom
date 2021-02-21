import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { ListComponent } from './components/list/list.component';
import { PremiumComponent } from './components/premium/premium.component';
import { SellComponent } from './components/sell/sell.component';

const routes: Routes = [
  { path: "" , component :ListComponent},
  { path: "premium" , component :PremiumComponent},
  { path: "sell" , component :SellComponent},
  { path: "about" , component :AboutComponent},
  { path: "categories" , component :CategoriesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
