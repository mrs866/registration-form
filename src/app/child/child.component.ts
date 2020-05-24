import { Component, OnInit, Input, Output,EventEmitter} from '@angular/core';



@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

    @Output() employeeRecord = new EventEmitter();
 
EmployeeList=[
    { name: "John", rollNo: '10029'},
    { name: "Graham", rollNo: '10030'},
    { name: "Jonathan", rollNo: '10031'},
    { name: "Raunak", rollNo: '10032'},
    { name: "Chalis", rollNo: '10033'}   
  ]
  // @Input('parentName') public sravs:string;
    
  // @Input() public parentName: string;
  constructor() { }

  ngOnInit() {

  }
   
  passDataToParentComp() {
    this.employeeRecord.emit(this.EmployeeList);
   }
}
