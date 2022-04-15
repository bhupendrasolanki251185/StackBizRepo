import { Component, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { NewColorDirective } from '../new-color.directive';
import { ChildComponent } from './child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

//take as ref to directive or can take as component or template also
  @ViewChild(NewColorDirective) newColor: NewColorDirective;
  //@ViewChild(ChildComponent) childComp: ChildComponent;
  @ViewChildren(ChildComponent) childComp: QueryList<ChildComponent>;

  constructor() { }

  ngOnInit() {}

  onChangeColor(){
    this.newColor.changeColor();
  }

  onICount(index: number){
    this.childComp.toArray()[index].increment(2);
  }

  onDCount(index: number){
    this.childComp.toArray()[index].decrement(2);
  }

}