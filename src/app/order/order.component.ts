import { Component, OnInit } from '@angular/core';
import { OrderService } from './OrderService';
import { Orders, Counter } from '../modal'

import { timer, Subscription } from 'rxjs';
import { SessionStorageService } from 'angular-web-storage';
import { element } from 'protractor';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  timeLeft: number;
  subscription: Subscription;
  counters: Counter[];
  email: string;
  orders: Orders[];
  counterId: string;
  ind: number=0;

  constructor(private oService: OrderService, private session: SessionStorageService) { }


  ngOnInit() {

    this.oService.getCounter().subscribe(response => this.SuccessfulResponse(response));



  }
  call() {
    this.timeLeft = 5;
    this.oberservableTimer()
  }
  oberservableTimer() {

    this.timeLeft = 5;
    var source = timer(1000, 1000);
    this.subscription = source.subscribe(val => {
      --this.timeLeft;
      //console.log('Time left: ' + this.timeLeft);
      if (this.timeLeft === 0) {
        this.oService.getOrders(this.counterId).subscribe(response => this.handleSuccessfulResponse(response));
        this.subscription.unsubscribe()
        this.call();
      }
    });
  }


  SuccessfulResponse(response) {
    console.log("inside successful response")
    this.counters = response;
    this.counterId = this.session.get("counterId");
    this.oService.getOrders(this.counterId).subscribe(response => this.handleSuccessfulResponse(response));
    this.oberservableTimer()
  }

  handleSuccessfulResponse(response) {
    console.log("inside get orders")
    this.orders = response;

  }

  accept(id: string) {
    console.log(id)
    this.oService.acceptedStat(id).subscribe(resp => console.log("success"));
  }
  ready(id: string) {
    console.log(id)
    this.oService.readyStat(id).subscribe(resp => console.log("success"));
  }
  delivered(id: string) {
    console.log(id)
    this.orders.forEach(element =>{
      if(element.id === id){
        this.ind = this.orders.indexOf(element);
      }
    });
    this.orders.splice(this.ind,1)
    this.oService.deliveredStat(id).subscribe(resp => console.log("success"));
  }

}
