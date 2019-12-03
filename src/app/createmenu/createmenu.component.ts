import { Component, OnInit } from '@angular/core';
import { Item, Counter, } from '../modal';
import { CreateService } from './createService';
import { FormBuilder } from '@angular/forms';
import { OrderService } from '../order/OrderService';
import { SessionStorageService } from 'angular-web-storage';

@Component({
  selector: 'app-createmenu',
  templateUrl: './createmenu.component.html',
  styleUrls: ['./createmenu.component.css']
})

export class CreatemenuComponent implements OnInit {
  counter: Counter;
  radio: string;
  items: Item[];
  selItems: Item[] = [];
  ids: string[] = [];
  form;
  counters: Counter[];
  email: string;
  counterId: string;
  date: Date = new Date();

  constructor(private session: SessionStorageService, private itemService: CreateService, private fb: FormBuilder, private orderService: OrderService) {


  }
  ngOnInit() {
    console.log("init")
    this.itemService.getItems().subscribe(response => this.handleSuccessfulResponse(response));

  }


  handleSuccessfulResponse(response) {
    console.log("handling")
    this.items = response;
    console.log(this.items)
    this.email = sessionStorage.getItem('username');
    for (var i in this.counters) {
      if (this.counters[i].counterEmail === this.email) {

        this.counterId = (this.counters[i].id);

        console.log("this.counters[i].id" + this.counters[i].id)
      }
    }
  }



  createmenulist(Itemid) {
    if (!(this.ids.includes(Itemid))) {
      this.ids.push(Itemid)
      for (var i = this.ids.length - 1; i < this.ids.length; i++) {
        this.itemService.getItemById(this.ids[i]).subscribe(response => this.SuccessfulResponse(response));
      }
    }

  }
  SuccessfulResponse(response) {
    this.selItems.push(response);
  }



  confirm() {
    console.log("success");
    this.counter = this.session.get("counter");
    console.log((this.ids.length))
    if (this.ids.length) {
      alert("Once submitted Not able to change!!!!")
      this.itemService.createMenu(this.selItems, this.counter, this.date.toString()).subscribe(data => {
        alert("created!");
      });
    }
    else {
      alert("No Items Added in Menu")
    }
  }

  deletelist(Itemid, obj) {

    this.ids = this.ids.filter(i => i !== Itemid)
    this.selItems = this.selItems.filter((item) => item.id !== Itemid);

  }
  submit() {

    this.itemService.getItemsbyCuisine(this.radio).subscribe(response => this.handleSuccessfulResponse(response));


  }
}



