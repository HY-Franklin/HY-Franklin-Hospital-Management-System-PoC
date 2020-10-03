import { Injectable } from '@angular/core';
import {AuthenticateService} from "./authenticate.service";
import {ActivatedRouteSnapshot, Router, RouterStateSnapshot} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class RouteGuardServiceService {

  constructor(private router:Router,private authenticateService:AuthenticateService) { }
  canActivate(route:ActivatedRouteSnapshot,state:RouterStateSnapshot){
      if (this.authenticateService.isUserLoginIn())
        return true;
      this.router.navigate(['/login']);
      return false;
  }
}
