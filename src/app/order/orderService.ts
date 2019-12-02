import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import {Orders, Counter} from '../modal'

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  
url:string='';
  constructor(private httpClient: HttpClient) { }
  
  
  getOrders(counterId) {
    console.log("test call counter"+counterId);
    console.log('http://10.231.136.18:5000//ordersbycounter'+"/"+counterId)
    return this.httpClient.get<Orders[]>('http://10.231.136.18:5000//ordersbycounter'+"/"+counterId);
    
  }
  getCounterById(id:string){
    return this.httpClient.get<Counter>("http://10.231.139.34:7001/counters/"+id);
  }
  getCounter() {
    console.log("test call");
    
    return this.httpClient.get<Counter[]>('http://10.231.139.34:7001//counters');
    
  }

  acceptedStat(id:string){
    this.url = 'http://10.231.136.18:5000/orders/Accepted/'+id;
    console.log(this.url)
    return this.httpClient.put<string>(this.url,0);
  }
  readyStat(id:string){
    this.url = 'http://10.231.136.18:5000/orders/Ready/'+id;
    console.log(this.url)
    return this.httpClient.put<string>(this.url,0);
  }
  deliveredStat(id:string){
    this.url = 'http://10.231.136.18:5000/orders/Delivered/'+id;
    console.log(this.url)
    return this.httpClient.put<string>(this.url,0);
  }
}
