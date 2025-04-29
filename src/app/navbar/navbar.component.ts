import { Component } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatToolbarModule }    from '@angular/material/toolbar';
import { MatSidenavModule }    from '@angular/material/sidenav';
import { MatListModule }       from '@angular/material/list';
import { MatIconModule }       from '@angular/material/icon';
import { MatButtonModule }     from '@angular/material/button';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterOutlet,
    RouterLink,
    MatSlideToggleModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatButtonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

}
