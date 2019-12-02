import { Component, OnInit } from '@angular/core';
import { ListService } from './listService';
import { Menu } from '../modal';

@Component({
  selector: 'app-listmenu',
  templateUrl: './listmenu.component.html',
  styleUrls: ['./listmenu.component.css']
})
export class ListmenuComponent implements OnInit {
  
  menus:Menu[]=[];
  constructor(private mService: ListService ) {}

  ngOnInit() {
    this.mService.getMenus().subscribe(response => this.handleSuccessfulResponse(response));

  }
  handleSuccessfulResponse(response) {
    this.menus.push(response);
    console.log(this.menus)
}
}