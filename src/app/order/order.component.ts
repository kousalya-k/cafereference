import { Component, OnInit } from '@angular/core';
import {OrderService } from './OrderService';
import {Orders} from '../modal'
import {Counter} from '../modal'
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {


  constructor(private oService: OrderService) { }
  orders:Orders[]
  counters:Counter[]
  counterId:string='';
  email:string='';
  
  ngOnInit() {
     
     this.oService.getCounter().subscribe(response => this.SuccessfulResponse(response));
     
  }
  SuccessfulResponse(response) {
    this.counters = response;
    console.log(this.counters)
    this.email = sessionStorage.getItem('username');
    for(var i in this.counters){
      if(this.counters[i].counterEmail===this.email){
      
        this.counterId=(this.counters[i].id);
        console.log("this.counters[i].id"+this.counters[i].id)
      }
    }
    console.log("Logged Counter Id "+this.counterId)
    this.oService.getOrders(this.counterId).subscribe(response => this.handleSuccessfulResponse(response));
  }

  handleSuccessfulResponse(response) {
    console.log("inside get orders")
    this.orders = response;
    console.log("orders "+this.orders)
    for(var i in this.orders){
      for( var j in this.orders[i].listItems){
        console.log(this.orders[i].listItems[j].item.itemName)
      }
    
    }
  }
  
  accept(id:string){
    console.log(id)
   this.oService.acceptedStat(id).subscribe(resp => console.log("success"));
  }
  ready(id:string){
    console.log(id)
   this.oService.readyStat(id).subscribe(resp => console.log("success"));
  }
  delivered(id:string){
    console.log(id)
   this.oService.deliveredStat(id).subscribe(resp => console.log("success"));
  }

}
