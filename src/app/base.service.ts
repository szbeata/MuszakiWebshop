import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BaseService {
  databaseURL="https://muszakiwebshop-add7b-default-rtdb.europe-west1.firebasedatabase.app/products.json"
  
  constructor(private http:HttpClient) { }

  getProducts(): Observable<any> {
    return this.http.get<any>(this.databaseURL);
  }

  postProducts(product: any){
    return this.http.post(this.databaseURL, product)
  }

  putProducts(id: number, product: any){
    return this.http.put(`${this.databaseURL}/${id}.json`, product)
  }

  deleteProducts(id: number){
    return this.http.delete(`${this.databaseURL}/${id}.json`)
  }
}
