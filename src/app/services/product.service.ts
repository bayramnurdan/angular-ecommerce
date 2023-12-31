import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../common/product';
import { map } from 'rxjs/operators' ; 


@Injectable({
  providedIn: 'root'
})
export class ProductService {
 
  private baseUrl = "http://localhost:8080/api/products";


  constructor(private httpClient: HttpClient ) { }

  getProductList(): Observable<Product[]>{
    return this.httpClient.get<Product[]>(this.baseUrl);
  }
  getProductsByCategory(categoryName: string): Observable<Product[]>{
    return this.httpClient.get<Product[]>(this.baseUrl + "/category/"+ categoryName);
  }
  searchProducts(keyword: string){
    return this.httpClient.get<Product[]>(this.baseUrl + "/name/" + keyword);
  }
  getProduct(productId: number) {
    return this.httpClient.get<Product>(`${this.baseUrl}/${productId}`);
  }
}

