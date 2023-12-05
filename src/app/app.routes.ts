import { Routes } from '@angular/router';
import { LoginpageComponent } from './pages/login/loginpage.component';
import { HomeComponent } from './pages/home/home.component';
import { VideoComponent } from './pages/video/video.component';

export const routes: Routes = [
  {path: '', component: HomeComponent},
  {path:'login', component: LoginpageComponent},
  {path:'home', component: HomeComponent},
  {path:'video', component: VideoComponent},

];
