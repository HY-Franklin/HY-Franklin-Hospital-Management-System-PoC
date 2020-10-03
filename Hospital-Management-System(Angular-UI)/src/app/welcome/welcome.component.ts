import { Component, OnInit } from '@angular/core';
import {AuthenticateService} from "../service/authenticate.service";

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {



  returnMain() {
    window.open('/login','_self');
  }
  constructor(public authenticateService:AuthenticateService) { }

  ngOnInit(): void {
  }

}
