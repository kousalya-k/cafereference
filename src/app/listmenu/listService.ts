import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import {Menu} from '../modal'

@Injectable({
  providedIn: 'root'
})
export class ListService {
  

  constructor(private httpClient: HttpClient) { }
  
  
  getMenus() {
    
    
    return this.httpClient.get<Menu>('http://10.231.139.34:7001//menu');
  }  
}