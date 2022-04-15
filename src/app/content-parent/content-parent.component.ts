import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content-parent',
  templateUrl: './content-parent.component.html',
  styleUrls: ['./content-parent.component.css']
})
export class ContentParentComponent implements OnInit {

  subjects: [
    {e1: "English"},
    {e2: "Hindi"},
    {e3: "Maths"}
  ];
  students = [];


  constructor() { 
    this.students = [
      {"studentId": 1, "name": "Bhupendra", "age": 12, "subjects": this.subjects},
      {"studentId": 2, "name": "Kapil", "age": 21, "subjects": this.subjects},
      {"studentId": 12, "name": "Purva", "age": 32, "subjects": this.subjects},
      {"studentId": 11, "name": "Bunny", "age": 11, "subjects": this.subjects},
      {"studentId": 133, "name": "Sunil", "age": 33, "subjects": this.subjects},
    ];
  }

  ngOnInit() {
    
  }

}