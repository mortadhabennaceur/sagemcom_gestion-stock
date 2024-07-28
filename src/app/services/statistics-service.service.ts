import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StatisticsService {

  private baseUrl = 'http://localhost:9090/api/v1/statistics';

  constructor(private http: HttpClient) { }

  getProductCount(): Observable<any> {
    return this.http.get(`${this.baseUrl}/product-count`);
  }

  getTotalQuantity(): Observable<any> {
    return this.http.get(`${this.baseUrl}/total-quantity`);
  }

  getUserActivity(): Observable<any> {
    return this.http.get(`${this.baseUrl}/user-activity`);
  }

  // Add more methods as needed for other statistics
}
