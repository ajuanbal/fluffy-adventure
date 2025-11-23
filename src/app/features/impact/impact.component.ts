import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

type Stat = {
  value: string;
  label: string;
  sub?: string;
};

type Highlight = {
  title: string;
  body: string;
};

@Component({
  selector: 'app-impact',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './impact.component.html',
})
export class ImpactComponent {
  stats: Stat[] = [
    { value: '+12', label: 'procesos automatizados', sub: 'BPM / batch / validaciones' },
    { value: '−35%', label: 'tiempo de resolución', sub: 'incidentes críticos' },
    { value: '+8', label: 'módulos en producción', sub: 'fintech / legaltech' },
  ];

  highlights: Highlight[] = [
    {
      title: 'Mitigación de duplicidad ACH',
      body: 'Diagnóstico de rutas SQL y propuesta de control preventivo en batch.',
    },
    {
      title: 'UI consistente en PrimeNG',
      body: 'Mejoras de UX y validación clara en pantallas de operación diaria.',
    },
    {
      title: 'Soporte de microservicios',
      body: 'Correcciones y evolución en Java 17 / Spring, con foco en estabilidad.',
    },
  ];
}
