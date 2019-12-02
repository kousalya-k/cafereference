export class Orders {
       id: string;
       user: User;
      counter: Counter;
      listItems: ItemQuantity[];
       status:string
       date:String;
   
  }
  export class Item{
      id:string;
      itemName:string;
      itemDesc:string;
      itemPrice:string;
      itemCuisine:string;
      itemQuantity:number;
    
  }
  export class Counter{
      id:string;
      counterName:string;
      counterOwner:string;
      counterEmail:string;
      counterPassword:string;
  }
  export class User{
      id:string;
      name:string;
      password:string;
      email:string;
  }
  export class Menu{
      constructor(
      public counter:Counter,
      public date:string,
      //public selectCuisine:string,
      public  menuList:Item[]
      ){}
      }
// export class You{
//         constructor(
//             public id:string,
//             public lis:string[]
//         ){}
//     }
    export class ItemQuantity{
        id:string;
        item:Item;
        quant:number;

    }
    
  