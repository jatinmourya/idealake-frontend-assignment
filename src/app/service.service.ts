import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ServiceService {
  constructor(private http: HttpClient) {}
  getAllProducts() {
    return this.http.get('https://fakestoreapi.com/products');
  }
}
