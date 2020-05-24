import { Component, OnInit,ElementRef,AfterViewInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-theme',
  templateUrl: './theme.component.html',
  styleUrls: ['./theme.component.scss']
})
export class ThemeComponent implements  AfterViewInit {
@ViewChild('name', {static: false}) elname:ElementRef;
@ViewChild('state', {static: false}) elstate:ElementRef;
ngAfterViewInit() {
  this.elname.nativeElement.style.backgroundColor='black';
  this.elname.nativeElement.style.color='white';
  this.elstate.nativeElement.style.backgroundColor='cyan';
  this.elstate.nativeElement.style.color='red';
}
  constructor() { }

  ngOnInit() {
  }

}
