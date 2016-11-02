/**
 * Created by orehman on 11/1/2016.
 */

import {Directive, ElementRef, Input, OnChanges, Renderer} from '@angular/core';

@Directive({
  selector: '[done]'
})
export class DoneDirective implements OnChanges {
  @Input() done;

  ngOnChanges(changes){
    if(changes.done){
      if(this.done){
        this.renderer.setElementStyle(this.elmentRef.nativeElement, "text-decoration", "line-through");
      }
      else{
        this.renderer.setElementStyle(this.elmentRef.nativeElement, "text-decoration", "underline");
      }
    }
  }

  constructor(private elmentRef: ElementRef, private renderer: Renderer) {

  }


}
