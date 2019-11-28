import { Component, OnInit } from '@angular/core';
import { Item, Menu, Counter, You } from '../modal';
import { CreateService } from './createService';

@Component({
  selector: 'app-createmenu',
  templateUrl: './createmenu.component.html',
  styleUrls: ['./createmenu.component.css']
})
export class CreatemenuComponent implements OnInit {
  route: any;
  items: Item[];
  selItems: Item[]=[];

  ids: string[] = [];
  dispIds:string[]=[];
  c: Counter;
//  menu: Menu = new Menu("",this.c,"south", this.selItems);
 // you:You = new You("c002",this.ids)


  constructor(private itemService: CreateService) {}
  ngOnInit() {
    this.itemService.getItems().subscribe(response => this.handleSuccessfulResponse(response));

  }

  handleSuccessfulResponse(response) {
    this.items = response;
  }
  // createmenulist(Itemid) {
  //   console.log("Push "+Itemid)
  //   this.ids.push(Itemid)
  //   console.log("ids array "+this.ids)
  //   console.log("Before hell")
  //   console.log("Before for")
  //    for(var index in this.ids){
  //     console.log("Inside for")
  //     console.log("ItemId "+Itemid)
  //        console.log("index "+index)
  //        console.log("this.ids[index] "+this.ids[index])
  //        console.log("cond "+(this.ids[index].includes(Itemid)))
  //      if((this.ids[index].includes(Itemid))){
  //       console.log("inside hell")
  //        console.log("ItemId "+Itemid)
  //        console.log("index "+index)
  //        console.log("this.ids[index] "+this.ids[index])
  //      this.itemService.getItemById(this.ids[index]).subscribe(response => this.SuccessfulResponse(response));
  //      }
  //    }
    
  // }
  createmenulist(Itemid) {
    if(!(this.ids.includes(Itemid))){
    this.ids.push(Itemid)
    console.log("ids arr"+this.ids)
    
    for(var i=this.ids.length-1;i<this.ids.length;i++) {
         console.log("i"+i)
         console.log(this.ids.length-1);
        console.log("id")
         console.log(this.ids[i])
       
       this.itemService.getItemById(this.ids[i]).subscribe(response => this.SuccessfulResponse(response));
       }
      }
    
  }
   SuccessfulResponse(response) {
     
     this.selItems.push(response);
     console.log("Sel Items"+ this.selItems)
   }
   
  confirm() {
    console.log((this.ids.length))
    if(this.ids.length){
    alert("Once you submitted not able to change")
    this.itemService.createMenu(this.ids).subscribe(data => {
      console.log("Confirm "+this.ids)
      alert("created!");
    });
  }
   else{
     alert("No Items Added in Menu")
   }
  }

  
  deletelist(Itemid,obj) {
   
    this.ids=this.ids.filter(i=>i!==Itemid)
    console.log(this.selItems)
    //this.selItems=this.selItems.filter(i=>i!==Itemid)
    
    console.log("Del "+Itemid)
    
   this.selItems =this.selItems.filter((item) => item.id !== Itemid);
   console.log("After Delete"+this.selItems)
    console.log("After del arr "+this.ids)
    
  }

}




