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
    
    return this.httpClient.get<Orders[]>('http://10.231.139.34:5000//ordersbycounter'+"/"+counterId);
    
  }
  getCounter() {
    console.log("test call");
    
    return this.httpClient.get<Counter[]>('http://10.231.139.34:7001//counters');
    
  }

  acceptedStat(id:string){
    this.url = 'http://10.231.139.34:5000/orders/Accepted/'+id;
    console.log(this.url)
    return this.httpClient.put<string>(this.url,0);
  }
  readyStat(id:string){
    this.url = 'http://10.231.139.34:5000/orders/Ready/'+id;
    console.log(this.url)
    return this.httpClient.put<string>(this.url,0);
  }
  deliveredStat(id:string){
    this.url = 'http://10.231.139.34:5000/orders/Delivered/'+id;
    console.log(this.url)
    return this.httpClient.put<string>(this.url,0);
  }

//   public deleteModule(m) {
//     return this.httpClient.delete<Orders>("http://localhost:8079/modules" + "/" + m.code);
//   }

//   public createModule(m) {
//     return this.httpClient.post<Orders>("http://localhost:8079/modules", m);
//   }

  

//   public editModule(m){
//     return this.httpClient.put<Orders>("http://localhost:8079/modules" + "/",m.id);
//   }
}
