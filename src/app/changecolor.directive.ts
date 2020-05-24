import { Directive,ElementRef,AfterViewInit } from '@angular/core';

@Directive({
  selector: '[appChangecolor]'
})
export class ChangecolorDirective implements AfterViewInit{

  constructor(private elref:ElementRef) { }
  ngAfterViewInit(){
    this.elref.nativeElement.style.color='red';
  }
  change( changedcolor:string ){
    this.elref.nativeElement.style.color=changedcolor;
  }
}
