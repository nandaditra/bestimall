import { Injectable } from '@angular/core';
import { ApiService } from '../api/api.service';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Product } from '../../schema/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(
    private apiService: ApiService,
    private afs: AngularFirestore
    ) { }

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

  addProduct(product: Product){
    return this.afs.collection('/products').add(product);
  }

  getAllProducts(){
    return this.afs.collection('/products').snapshotChanges();
  }

  deleteProduct(product: Product){
    return this.afs.doc('/products/'+product.id).delete()    
  }
}
