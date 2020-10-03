import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {AdministratorComponent} from "./administrator/administrator.component";
import {BillingComponent} from "./billing/billing.component";
import {LabComponent} from "./lab/lab.component";
import {PatientComponent} from "./patient/patient.component";
import {UpdateComponent} from "./update/update.component";
import {WelcomeComponent} from "./welcome/welcome.component";
import {RouteGuardServiceService} from "./service/route-guard-service.service";


const routes: Routes = [
  {path:'', redirectTo:'login',pathMatch:'full'},
  {path:'login',component: LoginComponent},
  {path:'welcome', component:WelcomeComponent,canActivate:[RouteGuardServiceService]},
  {path:'admin',component:AdministratorComponent,canActivate:[RouteGuardServiceService]},
  {path:'bill',component: BillingComponent,canActivate:[RouteGuardServiceService]},
  {path:'lab',component: LabComponent,canActivate:[RouteGuardServiceService]},
  {path:'patient',component: PatientComponent,canActivate:[RouteGuardServiceService]},
  {path:'update',component:UpdateComponent,canActivate:[RouteGuardServiceService]},
  {path:'**',component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
