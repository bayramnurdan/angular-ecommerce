import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/common/product';
import { ProductService } from 'src/app/services/product.service';
import { ActivatedRoute  } from '@angular/router';


@Component({
  selector: 'app-product-list-by-category',
  templateUrl: './product-list-by-category.component.html',
  styleUrls: ['./product-list-by-category.component.css']
})
export class ProductListByCategoryComponent implements OnInit {
  categorizedProducts : Product[] = [];
  constructor(private productService:ProductService,
    private route: ActivatedRoute){}

  ngOnInit(): void {
    this.route.params.subscribe(params =>{
      const cat = params['name'];
      this.listProductsByCategory(cat)
    }
      );
   
      
  }
 
  listProductsByCategory(categoryName : string){
    this.productService.getProductsByCategory(categoryName).subscribe(
      data=>{
        this.categorizedProducts = data;
      }
    )
  }

}

