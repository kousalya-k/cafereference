import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Item, Menu, Counter } from '../modal'

@Injectable({
  providedIn: 'root'
})
export class CreateService {
  menu: Menu;
  counter: Counter;

  constructor(private httpClient: HttpClient) { }

  getItems() {

    return this.httpClient.get<Item[]>('http://10.234.209.84:7001//items');

  }

  getItemById(id) {
    console.log(id)
    return this.httpClient.get<Item[]>('http://10.234.209.84:7001//items' + "/" + id);

  }
  getItemsbyCuisine(cuisineid: string) {
    console.log("inside service" + cuisineid)
    console.log("inside service" + typeof (cuisineid))
    return this.httpClient.get<Item[]>('http://10.234.209.84:7001//items/findbycuisine/' + cuisineid);
  }
  getCounterById(id: string) {
    return this.httpClient.get<Counter>("http://10.234.209.84:7001/counters/" + id);
  }
  public createMenu(items, counter, date: string) {
    this.menu = new Menu(counter, date, items)
    console.log(this.menu);
    return this.httpClient.post<Menu>("http://10.234.209.84:7001/menu", this.menu);
  }

}