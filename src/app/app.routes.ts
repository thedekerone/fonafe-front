import { Routes } from '@angular/router';
import { LoginpageComponent } from './pages/login/loginpage.component';
import { HomeComponent } from './pages/home/home.component';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';
import { VideoComponent } from './pages/video/video.component';
import { BlogComponent } from './pages/blog/blog.component';
import { CreateMaintenancePageComponent } from './pages/create-maintenance-page/create-maintenance-page.component';
import { CreatePostComponent } from './pages/blog/create/create-post.component';
import { PropositoComponent } from './pages/proposito/proposito.component';
import { MemoriaComponent } from './pages/memoria/memoria.component';
import { BlogPostComponent } from './pages/blog/blog-post/blog-post.component';
import { authGuard, reverseAuthGuard } from './auth.guard';
import { EditPostComponent } from './pages/blog/edit-post/edit-post.component';
import { DataSheetComponent } from './pages/data-sheet/data-sheet.component';
import { FinancialCompaniesComponent } from './pages/financial-companies/financial-companies.component';
import { NonFinancialCompaniesComponent } from './pages/non-financial-companies/non-financial-companies.component';

export const routes: Routes = [
  { path: '', component:HomeComponent,  pathMatch: 'full' },
  { path: 'login', component: LoginpageComponent, canActivate: [reverseAuthGuard] },
  { path: 'video', component: VideoComponent },
  { path: 'nosotros', component: NosotrosComponent },
  { path: 'proposito', component: PropositoComponent },
  { path: 'memoria', component: MemoriaComponent },
  { path: 'ficha-tecnica', component: DataSheetComponent},
  { path: 'empresas-financieras', component: FinancialCompaniesComponent},
  { path: 'empresas-no-financieras', component: NonFinancialCompaniesComponent},
  { path: 'sala-de-prensa/crear', component: CreatePostComponent, canActivate: [authGuard] },
  { path: 'sala-de-prensa/editar/:id', component: EditPostComponent, canActivate: [authGuard]},
  { path: 'sala-de-prensa/:id', component: BlogPostComponent },
  { path: 'sala-de-prensa', component: BlogComponent},
  { path: '**', component: CreateMaintenancePageComponent },
];
