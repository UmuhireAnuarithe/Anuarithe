import { Directive,ElementRef } from '@angular/core';

@Directive({
  selector: '[appBolder]'
})
export class BolderDirective {

  // constructor() { }

  constructor(private elem:ElementRef) {
    elem.nativeElement.style.fontWeight = "bolder";
  }


}
