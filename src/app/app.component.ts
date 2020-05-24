import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  //title = 'registrationform';
//   public name="Angular";
  EmployeeList:any;

passDataToParentComp(data:any){
   this.EmployeeList=data;
 }
// display = false;
//  books = [
//   {id:1, name: 'Html', price:'100'},
//   {id:2, name: 'Css', price:'150'},
//   {id:3, name: 'Js', price:'170'},
//   {id:4, name: 'Angular', price:'180'}
// ];
// obj= {
//    data:"history"
//   }
 }
  