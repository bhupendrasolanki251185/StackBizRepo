import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appNewColor]',
})
export class NewColorDirective {
  constructor(private elemRef: ElementRef) {}

  ngAfterViewInit() {
    this.elemRef.nativeElement.style.color = 'pink';
  }

  changeColor() {
    this.elemRef.nativeElement.style.color = 'Red';
  }
}
