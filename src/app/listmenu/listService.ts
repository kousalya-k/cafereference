import { Injectable } from '@angular/core';
import { SessionStorageService } from 'angular-web-storage';
import { HttpClient } from '@angular/common/http';
import { Menu } from '../modal'

@Injectable({
  providedIn: 'root'
})
export class ListService {
  id: string;

  constructor(private httpClient: HttpClient, private session: SessionStorageService) { }


  getMenus() {
    this.id = this.session.get("counterId");
    return this.httpClient.get<Menu>('http://10.234.209.84:7001//menu/menu/' + this.id);
  }
}