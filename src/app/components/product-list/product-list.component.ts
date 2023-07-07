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
  currentCategoryName: string = "";
  searchMode: boolean = false;
  
  constructor(private productService:ProductService,
              private route: ActivatedRoute ){}

  ngOnInit(): void {
  this.route.params.subscribe(() => {
    this.listProducts();
  });
  }

  listProducts(){
    this.searchMode = this.route.snapshot.paramMap.has('keyword');
    if (this.searchMode){
      this.handleSearchProducts();
    }else{
      this.handleListProducts();
    }
  }

  handleSearchProducts() {
    const theKeyword: string = this.route.snapshot.paramMap.get('keyword')!;
    this.productService.searchProducts(theKeyword).subscribe(
      data => {
        this.products = data;
      }
    );
  }

  handleListProducts(){
    const hasCategoryName: boolean = this.route.snapshot.paramMap.has('name')
    if (hasCategoryName){
      this.currentCategoryName = this.route.snapshot.paramMap.get('name')!;

      this.productService.getProductsByCategory(this.currentCategoryName).subscribe(
        data => {
          this.products = data;
        }
      )
    }

    this.productService.getProductList().subscribe(
    data => {
      this.products = data;
    }
    )

  }
 

}
