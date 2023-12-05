import { Routes } from '@angular/router';
import { LoginpageComponent } from './pages/login/loginpage.component';
import { HomeComponent } from './pages/home/home.component';
import { VideoComponent } from './pages/video/video.component';
import { BlogComponent } from './pages/blog/blog.component';
import { CreateMaintenancePageComponent } from './pages/create-maintenance-page/create-maintenance-page.component';

export const routes: Routes = [
  {path: '', redirectTo:'home', pathMatch: 'full'},
  {path:'login', component: LoginpageComponent},
  {path:'home', component: HomeComponent},
  {path:'video', component: VideoComponent},
  {path:'sala-de-prensa', component: BlogComponent},
  {path:'**', component: CreateMaintenancePageComponent},
];
