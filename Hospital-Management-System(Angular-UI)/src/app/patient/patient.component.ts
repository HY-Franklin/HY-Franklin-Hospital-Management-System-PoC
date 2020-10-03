import { Component, OnInit } from '@angular/core';
import {ShowService} from "../show.service";
import {Patients} from "../classes/Patients";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {

  patients=[];

  getPatients(){
    //.patients
    // @ts-ignore
    this.http.get(`http://localhost:8080/patients`).subscribe(data=>console.log(this.patients=data._embedded.patients));
  }


  constructor(private http:HttpClient) { }

  ngOnInit(): void {
  }

}
