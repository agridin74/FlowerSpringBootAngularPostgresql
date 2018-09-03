import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FlowerService {
  
  private baseUrl = 'http://localhost:8080/api/flowers';
  

  constructor(private http: HttpClient) { }
  
  getFlower(id: number): Observable<Object>{
    return this.http.get(`${this.baseUrl}/${id}`);
    
  }
  
  createFlower(flower: Object): Observable<Object>{
    return this.http.post(`${this.baseUrl}` + '/create', flower);
  }
  
  updateFlower(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }
  
  deleteFlower(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text'});
  }
  
  getFlowersList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
  
  getFlowersByPrice(price: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/price/${price}`);
  }
  
  deleteAll(): Observable<any>{
    return this.http.delete(`${this.baseUrl}`+'/delete', { responseType: 'text'});
  }
}
