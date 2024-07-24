import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, switchMap } from 'rxjs';
import { UserService } from './user.service'; // Import UserService

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private baseUrl = 'http://localhost:9090/api/v1/product';

  constructor(private http: HttpClient, private userService: UserService) {}

  getProducts(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/getallproducts`);
  }

  getProductshistory(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/getallproductshistory`);
  }

  addProduct(product: any): Observable<any> {
    const user = this.userService.getUserData();
    return this.userService.getUserIdByMatricule(user.matricule).pipe(
      switchMap(userId => this.http.post(`${this.baseUrl}/addproduct?userId=${userId}`, product))
    );
  }

  updateProduct(id: number, product: any): Observable<any> {
    const user = this.userService.getUserData();
    return this.userService.getUserIdByMatricule(user.matricule).pipe(
      switchMap(userId => this.http.put(`${this.baseUrl}/updateproduct/${id}?userId=${userId}`, product))
    );
  }

  deleteProduct(id: number): Observable<any> {
    const user = this.userService.getUserData();
    return this.userService.getUserIdByMatricule(user.matricule).pipe(
      switchMap(userId => this.http.delete(`${this.baseUrl}/deleteproduct/${id}?userId=${userId}`))
    );
  }

  getProductById(id: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/getproduct/${id}`);
  }
}
