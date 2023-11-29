import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyFirstService {

  messages: Array<any>=[];

  constructor() {
    this.init();
  }

  init():void{
    this.insert({
      name: 'Ausha',
      email: 'ausha@gmail.com',
      message: 'fuckyou'
    });
    this.insert({
      name: 'thrimal',
      email: 'thrimal@gmail.com',
      message: 'bitch'
    });
    this.insert({
      name: 'kasun',
      email: 'kasun@gmail.com',
      message: 'fuckoff'
    });
  }

  insert(message: {name: string,email:string,message:string}):void{
     this.messages.push(message);
  }
  gelAllMessages():any{
    return this.messages;
  }
  deleteMessage(index:number):void{
    this.messages.splice(index,1);
  }
}
