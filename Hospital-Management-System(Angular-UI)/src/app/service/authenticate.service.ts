import { Injectable } from '@angular/core';
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {


  authenticate(username,password){
    if (username==='admin'&&password==='admin'){
      sessionStorage.setItem('authenticated',username);
      this.route.navigate(['welcome']);
      return true;
    }
    else return false;
  }
  isUserLoginIn(){
    let user=sessionStorage.getItem('authenticated');
    return !(user===null)
  }
  goLogout(){
    sessionStorage.removeItem('authenticated');
  }


  constructor(private route:Router) { }
}
