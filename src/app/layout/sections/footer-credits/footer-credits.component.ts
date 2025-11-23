// src/app/layout/sections/footer-credits/footer-credits.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-footer-credits',
  standalone: true,
  templateUrl: './footer-credits.component.html',
})
export class FooterCreditsComponent {
  currentYear = new Date().getFullYear();
}
