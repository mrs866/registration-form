import { Component, OnInit, ViewChild } from '@angular/core';
import { ChangecolorDirective } from '../changecolor.directive';
@Component({
  selector: 'app-viewparent-color',
  templateUrl: './viewparent-color.component.html',
  styleUrls: ['./viewparent-color.component.scss']
})
export class ViewparentColorComponent implements OnInit {

  @ViewChild(ChangecolorDirective, {static: false}) sravs:ChangecolorDirective;
changecolor(color:string){
  this.sravs.change(color);
}
  constructor() { }

  ngOnInit() {
  }

}
