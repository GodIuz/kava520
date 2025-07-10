import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  isMainDropdownOpen = false;
  openSubmenu: string | null = null;
  isMobileMenuOpen = false;

  toggleMainDropdown() {
    this.isMainDropdownOpen = !this.isMainDropdownOpen;
    this.openSubmenu = null;
  }

  toggleSubmenu(name: string) {
    this.openSubmenu = this.openSubmenu === name ? null : name;
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
    this.isMainDropdownOpen = false;
    this.openSubmenu = null;
  }

  @HostListener('document:click', ['$event'])
  handleClickOutside(event: MouseEvent) {
    const target = event.target as HTMLElement;
    if (!target.closest('nav')) {
      this.isMainDropdownOpen = false;
      this.openSubmenu = null;
      this.isMobileMenuOpen = false;
    }
  }
}
