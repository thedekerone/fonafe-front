import { Routes } from '@angular/router';
import { LoginpageComponent } from './pages/login/loginpage.component';
import { HomeComponent } from './pages/home/home.component';
import { CreateMaintenancePageComponent } from './create-maintenance-page/create-maintenance-page.component';

export const routes: Routes = [
  {path: '', redirectTo:'home', pathMatch: 'full'},
  {path:'login', component: LoginpageComponent},
  {path:'home', component: HomeComponent},
  {path:'**', component:CreateMaintenancePageComponent},

];
