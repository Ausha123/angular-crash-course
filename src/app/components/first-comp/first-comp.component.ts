import {Component, inject, Injectable} from '@angular/core';
import {MyFirstService} from "../../services/my-first.service";

@Component({
  selector: 'app-first-comp',
  templateUrl: './first-comp.component.html',
  styleUrls: ['./first-comp.component.scss']
})
export class FirstCompComponent {
    name:string='';
    email:string='';
    message:string='';
    isSubmitted = false;
    table:Array<any>=[];

  //property injection
  // private service:MyFirstService = inject(MyFirstService)

//constructor injection
constructor( private service:MyFirstService) {
  this.table = this.service.gelAllMessages();
  this.isSubmitted = this.table.length>0;
}
  onSubmit() {
    this.isSubmitted=true;
    this.service.insert({
      'name':this.name,
      'email':this.email,
      'message':this.message,
  });
    console.log(this.table);
  }

  deletemessage(index: number) {
    this.service.deleteMessage(index);
  }
}
