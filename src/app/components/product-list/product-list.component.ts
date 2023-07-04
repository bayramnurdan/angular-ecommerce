import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/common/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list-grid.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  categorizedProducts : Product[] = [];
  constructor(private productService:ProductService,
              private route: ActivatedRoute ){}

  ngOnInit(): void {
    this.listProducts();
      
  }
  listProducts(){
    this.productService.getProductList().subscribe(
    data => {
      this.products = data;
    }
    )
  }
  listProductsByCategory(categoryName: string){
    this.productService.getProductsByCategory(categoryName).subscribe(
      data=>{
        this.categorizedProducts = data;
      }
    )
  }

}
