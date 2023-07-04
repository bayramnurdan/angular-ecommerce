import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductService } from './services/product.service';
import { CategoryListComponent } from './components/category-list/category-list.component';
import { Routes, RouterModule } from '@angular/router';
import { ProductListByCategoryComponent } from './components/product-list-by-category/product-list-by-category.component';


const routes: Routes = [
  {path: 'category/:name', component: ProductListByCategoryComponent },
  {path: 'products', component: ProductListComponent },
  {path: '', redirectTo: '/products', pathMatch:'full' },
  {path: '**', redirectTo: '/products', pathMatch:'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    CategoryListComponent,
    ProductListByCategoryComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    HttpClientModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
