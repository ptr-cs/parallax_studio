import { NgModule }           from '@angular/core';
import { BrowserModule }      from '@angular/platform-browser';
import { RouterModule }       from '@angular/router';

import { AppComponent }       from './app.component';
import { HomeComponent }      from './pages/home/home.component';
import { DocsComponent }      from './pages/docs/docs.component';
import { AboutComponent }     from './pages/about/about.component';
import { routes }            from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DocsComponent,
    AboutComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
