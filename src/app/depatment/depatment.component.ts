import { Component, OnInit } from '@angular/core';
import {  ActivatedRoute, Router,ParamMap } from '@angular/router';



@Component({
  selector: 'app-depatment',
  templateUrl: './depatment.component.html',
  styleUrls: ['./depatment.component.scss']
})
export class DepatmentComponent implements OnInit {
  fruits=[
    {"id": 1, "name": "Orange"},
    {"id": 2, "name": "Mango"},
    {"id": 3, "name": "Apple"},
    {"id": 4, "name": "Grapes"},
    {"id": 5, "name": "Banana"}   
  ]
 public fruitsId;
  constructor(private route: ActivatedRoute, private router: Router ) { }
  ngOnInit() {
    let id = parseInt(this.route.snapshot.paramMap.get('id'));
      this.fruitsId=id;
      // this.route.paramMap.subscribe((params: ParamMap) =>{
      //  let id = parseInt(params.get('id'));
      //  this.fruitsId= id;
      // })
  }
  goBack(){
    let backId = this.fruitsId - 1;
    this.router.navigate(['/depatment', backId]);
  }
  goNext(){
    let nextId = this.fruitsId + 1;
    this.router.navigate(['/depatment', nextId]);
}
showOverview(){
  this.router.navigate(['overview']), {relativeTo: this.route};
}
showContact(){
  this.router.navigate(['contact']), {relativeTo: this.route};
}
}
