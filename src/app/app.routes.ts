import { Routes }            from '@angular/router';
import { HomeComponent }     from './pages/home/home.component';
import { DocsComponent }     from './pages/docs/docs.component';
import { AboutComponent }    from './pages/about/about.component';

export const routes: Routes = [
  { path: 'home',  component: HomeComponent },
  { path: 'docs',  component: DocsComponent },
  { path: 'about', component: AboutComponent },
  { path: '',      redirectTo: 'home', pathMatch: 'full' },
  { path: '**',    redirectTo: 'home', pathMatch: 'full' },
];
