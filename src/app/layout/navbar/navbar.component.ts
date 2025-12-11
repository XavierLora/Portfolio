import { Component, inject, signal } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { NAVBAR_MENU_ITEMS } from '../shared/constants';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule, RouterLink],
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {
  /* Dependencies */
  readonly router = inject(Router);

  /* UI and State Controls */
  navMenuItems = NAVBAR_MENU_ITEMS;
  isNavbarOpen = signal(false);

  /* Toggles nav bar open/close in MOB*/
  toggleNavbar(): void {
    this.isNavbarOpen.set(!this.isNavbarOpen());
  }  
}
