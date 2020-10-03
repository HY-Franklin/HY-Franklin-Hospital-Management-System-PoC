import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
@Component({
  selector: 'app-billing',
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.css']
})
export class BillingComponent implements OnInit {

  billings=[];
  the_url='http://localhost:8080';
  getBills(){
    //.bills
    // @ts-ignore
    this.http.get(`${this.the_url}/bills`).subscribe(data=>console.log(this.billings=data._embedded.bills));
  }



  constructor(private http:HttpClient) { }

  ngOnInit(): void {
  }

}
