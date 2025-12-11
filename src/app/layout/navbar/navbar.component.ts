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

  navMenuItems = NAVBAR_MENU_ITEMS;
  isNavbarOpen = signal(false);

  toggleNavbar() {
    this.isNavbarOpen.set(!this.isNavbarOpen());
  }  
}
