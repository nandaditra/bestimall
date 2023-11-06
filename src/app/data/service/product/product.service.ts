import { Injectable } from '@angular/core';
import { ApiService } from '../api/api.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private apiService: ApiService) { }

  getListProductFromApi() {
    const listProduct = this.apiService.getApiListProducts();
    return listProduct
  }

  getDetailProductFromApi(productId: number) {
    const detailProduct = this.apiService.getApiDetailProduct(productId);
    return detailProduct
  }

  getCategoryProductFromApi(category: string) {
    const categoryProduct = this.apiService.getApiCategoryProduct(category);
    return categoryProduct
  }
 
}
