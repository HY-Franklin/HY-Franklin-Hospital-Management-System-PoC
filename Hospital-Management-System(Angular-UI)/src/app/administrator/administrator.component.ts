import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Billings} from "../classes/Billings";
import {Doctors} from "../classes/Doctors";
import {Labs} from "../classes/Labs";
import {Patients} from "../classes/Patients";
import {Staffs} from "../classes/Staffs";
@Component({
  selector: 'app-administrator',
  templateUrl: './administrator.component.html',
  styleUrls: ['./administrator.component.css']
})
export class AdministratorComponent implements OnInit {

  patients=[];
  billings=[];
  labReports=[];
  doctors=[];
  staffs=[];
  the_url='http://localhost:8080';
  _billings=new Billings();
  _doctors=new Doctors();
  _labReports=new Labs();
  _patients=new Patients();
  _staffs=new Staffs();
  isUpdate=false;
  isAddOne=false;


  constructor(private http:HttpClient) {}


  addBillings(amount,date){
    this._billings.amount=amount;
    this._billings.date=date;
    this.http.post(`${this.the_url}/bills`,this._billings).subscribe(date=>console.log(date));
  }

  addDoctor(name,gender,phone){
    this._doctors.name=name;
    this._doctors.gender=gender;
    this._doctors.phone=phone;
    this.http.post(`${this.the_url}/doctors`,this._doctors).subscribe(data=>console.log(data));
  }

  addLabs(diagnosis){
    this._labReports.diagnosis=diagnosis;
    this.http.post(`${this.the_url}/labs`,this._labReports).subscribe(data=>console.log(data));
  }
  addPatient(name,gender,type,phone,id1,id2){
    this._patients.name=name;
    this._patients.gender=gender;
    this._patients.type=type;
    this._patients.phone=phone;
    this._patients.doctors_id=id1;
    this._patients.lab_reports_id=id2;
    this.http.post(`${this.the_url}/patients`,this._patients).subscribe(data=>console.log(data));
  }

  addStaffs(name,gender,phone){
    this._staffs.name=name;
    this._staffs.gender=gender;
    this._staffs.phone=phone;
    this.http.post(`${this.the_url}/staff`,this._staffs).subscribe(data=>console.log(data));
  }



  updateBills(amount,date,url){
    this._billings.amount=amount;
    this._billings.date=date;
    console.log(url);
    console.log(this._billings.amount+' '+this._billings.date)
    this.http.put(url,this._billings).subscribe(date=>console.log(date));
  }
  updateDoctor(name,gender,phone,url){
    this._doctors.name=name;
    this._doctors.gender=gender;
    this._doctors.phone=phone;
    this.http.put(url,this._doctors).subscribe(data=>console.log(data));
  }

  updatePatient(name,gender,type,phone,id1,id2){
    this._patients.name=name;
    this._patients.gender=gender;
    this._patients.type=type;
    this._patients.phone=phone;
    this._patients.doctors_id=id1;
    this._patients.lab_reports_id=id2;
    this.http.put(`${this.the_url}/patients`,this._patients).subscribe(data=>console.log(data));
  }

  updateLabs(diagnosis,url){
      this._labReports.diagnosis=diagnosis;
      console.log(this._labReports.diagnosis);
      this.http.put(url,this._labReports).subscribe(data=>console.log(data));
  }

  updateStaffs(name,gender,phone,url){
    this._staffs.name=name;
    this._staffs.gender=gender;
    this._staffs.phone=phone;
    console.log(this._staffs);
    this.http.put(url,this._staffs).subscribe(data=>console.log(data));
  }





  getBills(){
    //.bills
      // @ts-ignore
    this.http.get(`${this.the_url}/bills`).subscribe(data=>console.log(this.billings=data._embedded.bills));
  }
  getPatients(){
    //.patients
    // @ts-ignore
    this.http.get(`${this.the_url}/patients`).subscribe(data=>console.log(this.patients=data._embedded.patients));
  }
  getLabs(){
    //.labs
    // @ts-ignore
    this.http.get(`${this.the_url}/labs`).subscribe(data=>console.log(this.labReports=data._embedded.labs));
  }
  getDoctors(){
    //.doctors
    // @ts-ignore
    this.http.get(`${this.the_url}/doctors`).subscribe(data=>console.log(this.doctors=data._embedded.doctors));
  }
  getStaffs(){
    //data._embedded.staff[0].name
    // @ts-ignore
    this.http.get(`${this.the_url}/staff`).subscribe(data=>console.log(this.staffs=data._embedded.staff));
  }

  deleteThis(value) {
    console.log(value);
    this.http.delete(value).subscribe(data => console.log(data));
    this.refresh();
    alert("success!");
  }

  refresh() {
    window.location.reload();
  }



  ngOnInit(): void {
  }

}
