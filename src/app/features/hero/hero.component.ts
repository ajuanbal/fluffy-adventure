// src/app/features/hero/hero.component.ts
import { Component } from '@angular/core';
import { CineButtonComponent } from '../../shared/ui/cine-button/cine-button.component';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CineButtonComponent],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
})
export class HeroComponent {
  name = 'JUAN BALDERRAMO';
  role = 'Full-Stack Developer';
  tagline = 'Arquitectura limpia. Procesos claros. Entregas reales.';
  meta = '> Java 17 | Spring Boot | Angular 19 | PrimeNG | Camunda';
  statusLine = 'status: online · location: Ecuador · role: full-stack';
}
