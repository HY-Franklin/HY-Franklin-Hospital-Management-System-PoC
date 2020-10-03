import {HttpClient} from "@angular/common/http";
import { Component, OnInit } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';

import {Observable} from "rxjs";
import {Test} from "./test";
import {AuthenticateService} from "../service/authenticate.service";



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  Ip={};
  jwtCodes;
  response;
  username='';
  password='';


  Autofill(){
    this.username='admin';
    this.password='admin';
  }



  constructor(private httpClient:HttpClient,public authenticateService:AuthenticateService) { }

  ngOnInit(): void {

  }

   httpOptions = {
    headers: new HttpHeaders({
      // 'Access-Control-Allow-Origin':'*',
      // 'Access-Control-Allow-Methods':'POST, GET, OPTIONS, DELETE',
      // 'Access-Control-Max-Age' :'86400',
      // 'Connection': 'keep-alive',
      'Content-Type':  'application/json',
      'Authorization': `Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJmb28iLCJleHAiOjE1OTM2NTEzNjQsImlhdCI6MTU5MzYxNTM2NH0.9SqZ2U0QtSS-9b-VnwrdlsvCn3mCocVjRrqHVYlAU98`
    })
  };

  login() {


      let url = 'http://localhost:8080/authenticate';
      this.httpClient.post(url, {
        userName: 'foo',
        password: 'foo'
      }).subscribe(data=> {
        this.jwtCodes = data;

      });
  }



  // GET heroes whose name contains search term

  searchHeroes(){
    // this.login();
    // this.response=this.httpClient.get('http://localhost:8080/hello',this.httpOptions)
    //   .subscribe(responseData=>this.response=responseData);
    // this.Ip=this.httpClient.get<Test>('http://ip.jsontest.com/').subscribe(data=>this.Ip=data);

    // console.log(this.jwtCodes.jwt);

    fetch("http://localhost:8080/hello", {
        "method": "GET",
        "headers": {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin":"*",
          "Access-Control-Allow-Methods":"DELETE, POST, GET, OPTIONS",
          "Access-Control-Allow-Headers": "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With",
          "Authorization": "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJmb28iLCJleHAiOjE1OTM2NTEzNjQsImlhdCI6MTU5MzYxNTM2NH0.9SqZ2U0QtSS-9b-VnwrdlsvCn3mCocVjRrqHVYlAU98"

        }
      })
        .then(response => {
          console.log(response);
        })
        .catch(err => {
          console.log(err);
        });

  }

}
