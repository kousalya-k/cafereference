export class Orders {
       id: string;
       user: User;
      counter: Counter;
      items: Item[];
       status:string
   
  }
  export class Item{
      id:string;
      itemName:string;
      itemDesc:string;
      itemPrice:string;
      itemCuisine:string;
      isAvailable:string;
    
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
      public id:string,
      public counter:Counter,
      public selectCuisine:string,
      public  menuList:Item[]
      ){}
      }
export class You{
        constructor(
            public id:string,
            public lis:string[]
        ){}
    }
    //   id:string;
    //   counter:Counter;
    //   selectCuisine:string
    //   menuList:Item[]
  