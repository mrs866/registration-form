import { Component, OnInit, ViewChild  } from '@angular/core';

import {NgForm} from '@angular/forms';


@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.scss']
})
export class LoginformComponent implements OnInit {
  public name: string;
  public email: string;
  public phoneNumber: string;
  public gender: string;
  public country: string;
  public date: string;
  public designation: string;
  public company: string;
  public salary:string;
  submitted=false;


  @ViewChild('regForm',{static: false}) regForm:NgForm;




  public rows: Array<{name: string, email: string, phoneNumber: string, gender: string, country: string,
    date: string, designation: string, company: string, salary:string;
  }> = [];

  buttonClicked() {
    this.rows.push( { name: this.name, email: this.email, phoneNumber: this.phoneNumber, gender:this.gender, 
      country:this.country, date:this.date, designation:this.designation,company:this.company,salary:this.salary} );
    this.name = null;
    this.email = null;
    this.phoneNumber = null;
    this.gender = null;
    this.country = null;
    this.date = null;
    this.designation = null;
    this.company = null;
    this.salary = null;
    this.regForm.reset();
    this.submitted= true
  }

 
  ngOnInit() {
  }
  Country = [
    {code: 'rs', country: 'India' },
    {code: '$', country: 'US' },
    {code: 'Euro', country: 'Germany' },
  ]
  code:string;
  SelectCountry: string;
  onCountryChange( value ) {
    this.code =value;
    if (this.code ==='rs'){
      this.SelectCountry = 'India';
    }
    else if (this.code === '$') {
      this.SelectCountry = 'US';
    }
    else if (this.code === 'Euro') {
      this.SelectCountry ='Germany';
    }
  }
  
  }



