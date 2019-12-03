import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Orders, Counter } from '../modal'

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  url: string = '';
  constructor(private httpClient: HttpClient) { }


  getOrders(counterId) {
    return this.httpClient.get<Orders[]>('http://10.234.211.24:5000//ordersbycounter' + "/" + counterId);

  }
  getCounterById(id: string) {
    return this.httpClient.get<Counter>("http://10.234.209.84:7001/counters/" + id);
  }
  getCounter() {
    return this.httpClient.get<Counter[]>('http://10.234.209.84:7001//counters');

  }

  acceptedStat(id: string) {
    this.url = 'http://10.234.211.24:5000/orders/Accepted/' + id;
    console.log(this.url)
    return this.httpClient.put<string>(this.url, 0);
  }
  readyStat(id: string) {
    this.url = 'http://10.234.211.24:5000/orders/Ready/' + id;
    console.log(this.url)
    return this.httpClient.put<string>(this.url, 0);
  }
  deliveredStat(id: string) {
    this.url = 'http://10.234.211.24:5000/orders/Delivered/' + id;
    console.log(this.url)
    return this.httpClient.put<string>(this.url, 0);
  }
}
