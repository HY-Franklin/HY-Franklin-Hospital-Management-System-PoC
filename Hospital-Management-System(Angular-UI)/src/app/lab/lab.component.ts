import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Labs} from "../classes/Labs";

@Component({
  selector: 'app-lab',
  templateUrl: './lab.component.html',
  styleUrls: ['./lab.component.css']
})
export class LabComponent implements OnInit {


  labReports=[];
  the_url='http://localhost:8080';
  getLabs(){
    //.labs
    // @ts-ignore
    this.http.get(`${this.the_url}/labs`).subscribe(data=>console.log(this.labReports=data._embedded.labs));
  }
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
  }

}
