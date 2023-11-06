import { Component } from '@angular/core';
import { Product } from 'src/app/data/schema/product';
import { ProductService } from 'src/app/data/service/product/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent{
  products: Product[] = []

  constructor(private productService:ProductService){
     
  }

  ngOnInit(){
     this.getListProduct();
  }

  getListProduct(){
    return this.productService.getListProductFromApi()
     .subscribe((data:any)=> {
       this.products = data
       console.log(this.products)
     })
  }
}
