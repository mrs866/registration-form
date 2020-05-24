import { Component, OnInit,ViewChild } from '@angular/core';
import { ViewchildcounterComponent } from '../viewchildcounter/viewchildcounter.component';

@Component({
  selector: 'app-viewparentcounter',
  templateUrl: './viewparentcounter.component.html',
  styleUrls: ['./viewparentcounter.component.scss']
})
export class ViewparentcounterComponent implements OnInit{
@ViewChild(ViewchildcounterComponent, {static: false}) sravs:ViewchildcounterComponent;
increase(){
  this.sravs.increasebyone();
}
decrease(){
  this.sravs.decreasebyone();
}
  constructor() { }

  ngOnInit() {
  }




















}
