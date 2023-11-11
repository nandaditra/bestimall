import { Component } from '@angular/core';
import { Product } from 'src/app/data/schema/product';
import { ProductService } from 'src/app/data/service/product/product.service';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent{
  products: Product[] = []
  isLoading: boolean = false

  constructor(private productService:ProductService){
          
  }

  ngOnInit(){
     this.getListProduct();
  }

  getListProduct(){
    this.isLoading = true;
    return this.productService.getListProductFromApi()
     .pipe(delay(2000))
     .subscribe((data:any)=> {
       this.isLoading = false
       this.products = data
     })
  }
}
