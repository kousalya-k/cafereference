import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Item, Menu } from '../modal'

@Injectable({
  providedIn: 'root'
})
export class CreateService {


  constructor(private httpClient: HttpClient) { }
 
  getItems() {

    return this.httpClient.get<Item[]>('http://10.231.139.34:7001//items');

  }
  // public createMenu(menu) {
  //   return this.httpClient.post<Menu>("http://localhost:7001/menu", menu);
  // }
  getItemById(id) {
    console.log(id)
    return this.httpClient.get<Item[]>('http://10.231.139.34:7001//items' + "/" + id);

  }
  public createMenu(ids) {
    console.log("Service ids arr "+ids)
    return this.httpClient.post<Menu>("http://10.231.139.34:7001/menu/kk"+ "/" + "c005", ids);
  }
  
}