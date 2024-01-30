import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  apiUrl = "https://localhost:44321/api/Product";

  GetProducts() {
    return this.http.get(this.apiUrl);
  }
}
