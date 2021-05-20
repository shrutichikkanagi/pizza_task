import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Orders } from './orders';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class OrdersService {
url = "/assets/orders.json";
  constructor(private http:HttpClient) { }

getOrders():Observable<Orders[]>{
  return this.http.get<Orders[]>(this.url)
}

getOrderById(id):Observable<any>{
  return this.http.get('/assets/orders.json/',id)
}

}
