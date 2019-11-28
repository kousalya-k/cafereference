import { Injectable } from '@angular/core';
import { Counter } from '../modal';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
 counters:Counter[]=[];
 email:String[]=[];
 pwd:String[]=[];
 flag:number=0;

  constructor(private httpClient: HttpClient,) {  this.getCounters().subscribe(response => this.handleSuccessfulResponse(response));
  }
  getCounters(){
    return this.httpClient.get<Counter[]>('http://10.231.139.34:7001/counters');
  }
  handleSuccessfulResponse(response) {
    this.counters=(response);
    
    for(var i in this.counters){
      
      this.email.push(this.counters[i].counterEmail);
      this.pwd.push(this.counters[i].counterPassword);
      console.log("Inside created place "+this.email);
    }
  }
  
  authenticate(username, password) {
    console.log("Username "+username)

   
  
    for(var i in this.email)
    {
      console.log("Enters for ")
      console.log(this.email[i])
      if(this.email[i] === username )
      {
          console.log("username correct")
          if(this.pwd[i]===password)
          {
            console.log("pwd correct")
            //enters
            sessionStorage.setItem('username', username)
            this.flag=1;
             return true;
            
            alert("Enters :)")
          }
          else
          {
            alert("Wrong Password")
            return false;
         
          }
      }
     

    }
    if(this.flag===0){
      alert("invalid username")
      return false;
      
    }


    // if (username === "javainuse" && password === "password") {
    //   sessionStorage.setItem('username', username)
    //   return true;
    // } else {
    //   return false;
    // }
  }
 

  isUserLoggedIn() {
    let user = sessionStorage.getItem('username')
    console.log(!(user === null))
    return !(user === null)
  }

  logOut() {
    sessionStorage.removeItem('username')
  }
}


