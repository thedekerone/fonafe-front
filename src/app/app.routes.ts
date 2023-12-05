import { Routes } from '@angular/router';
import { LoginpageComponent } from './pages/login/loginpage.component';
import { HomeComponent } from './pages/home/home.component';
import { CreateMaintenancePageComponent } from './create-maintenance-page/create-maintenance-page.component';
import { VideoComponent } from './ages/video/video.component';

export const routes: Routes = [
  {path: '', redirectTo:'home', pathMatch: 'full'},
  {path:'login', component: LoginpageComponent},
  {path:'home', component: HomeComponent},
  {path:'video', component: VideoComponent},
  {path:'**', component: CreateMaintenancePageComponent},
];
