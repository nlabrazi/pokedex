import { Component, HostListener, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { WindowService } from './pokemon/services/window.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: 'app.component.html',
})
export class AppComponent {
  isMenuOpen = false;
  screenWidth: number;

  constructor(private windowService: WindowService) {}

  ngOnInit(): void {
    // Obtenez la largeur de l'écran initialement
    this.screenWidth = this.windowService.getWindow().innerWidth;
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu() {
    this.isMenuOpen = false;
  }

  // HostListener pour suivre les changements de taille de l'écran
  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.screenWidth = this.windowService.getWindow().innerWidth;
    if (this.screenWidth >= 1024) {
      this.isMenuOpen = false; // Ferme le menu automatiquement lorsque l'écran devient grand
    }
  }
}
