import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
 
  number:number = 0
  message:string = `counter is ${this.number}`;

  constructor() { }

  ngOnInit() {
  }

  increment(id:number){
    this.number += id;
    this.message = `counter is ${this.number}`
  }

  decrement(id: number){
    this.number -= id;
    this.message = `counter is ${this.number}`
  }


}