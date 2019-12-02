import { Component, OnInit } from '@angular/core';
import { OrderService } from './OrderService';
import { Orders } from '../modal'
import { Counter } from '../modal'
import { ActivatedRoute } from '@angular/router';
import { timer, Observable, interval, Subscription } from 'rxjs';
import { SessionStorageService } from 'angular-web-storage';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  //private updateSubscription: Subscription;
  timeLeft: number;
  subscription: Subscription;
  counters: Counter[];
  email: string;
  orders: Orders[];
  counterId:string;

  constructor(private oService: OrderService,private session: SessionStorageService) { }


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
    // console.log(this.counters)
    // this.email = sessionStorage.getItem('username');
    // for (var i in this.counters) {
    //   if (this.counters[i].counterEmail === this.email) {

    //     this.counterId = (this.counters[i].id);

    //     console.log("this.counters[i].id" + this.counters[i].id)
    //   }
    // }
    // console.log("Logged Counter Id " + this.counterId)
    this.counterId=this.session.get("counterId");
    this.oService.getOrders(this.counterId).subscribe(response => this.handleSuccessfulResponse(response));
    this.oberservableTimer()
  }

  handleSuccessfulResponse(response) {
    console.log("inside get orders")
    this.orders = response;
    // this.orders.forEach(element => {
    //   console.log("insideelement")
    //   console.log(element);
    // });
    // console.log("orders " + this.orders)
    // for (var i in this.orders) {
    //   for (var j in this.orders[i].listItems) {
    //     console.log(this.orders[i].listItems[j].item.itemName)
    //   }

    // }
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
    this.oService.deliveredStat(id).subscribe(resp => console.log("success"));
  }

}
