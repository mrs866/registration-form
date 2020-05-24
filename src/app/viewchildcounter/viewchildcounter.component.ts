import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-viewchildcounter',
  templateUrl: './viewchildcounter.component.html',
  styleUrls: ['./viewchildcounter.component.scss']
})
export class ViewchildcounterComponent implements OnInit {
message:string='';
count:number=0;
  constructor() { }
  increasebyone(){
    this.count=this.count+1;
    this.message="counter:"+this.count;
  }
  decreasebyone(){
    this.count=this.count-1;
    this.message="counter:"+this.count;
  }

  ngOnInit() {
  }
}
