import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

type TimelineItem = {
  year: string;
  title: string;
  place: string;
  bullets: string[];
  tags?: string[];
};

@Component({
  selector: 'app-timeline',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './timeline.component.html',
})
export class TimelineComponent {
  items: TimelineItem[] = [
    {
      year: '2025',
      title: 'Full-Stack Developer',
      place: 'FISA / Omnia (Fintech – Legaltech)',
      bullets: [
        'Soporte y evolución de microservicios Java/Spring y front Angular 19.',
        'Análisis de procesos ACH Lotes y mitigación de duplicidad en batch.',
        'Mejora de UX en módulos críticos con PrimeNG y validación robusta.',
      ],
      tags: ['Java 17', 'Angular 19', 'Oracle', 'Camunda', 'JBoss'],
    },
    {
      year: '2024',
      title: 'Backend / BPM Support',
      place: 'Plataformas Bancarias',
      bullets: [
        'Troubleshooting de flujos BPMN y plantillas de negocio.',
        'Optimización de consultas e integraciones con servicios externos.',
      ],
      tags: ['Camunda', 'PL/SQL', 'Kafka'],
    },
    {
      year: '2023',
      title: 'Proyectos personales',
      place: 'Ecuador',
      bullets: [
        'Construcción de App-Abogado multi-tenant con Angular y Firebase.',
        'Práctica enfocada a diseño responsivo y consumo de APIs REST.',
      ],
      tags: ['Angular', 'Tailwind', 'Firebase'],
    },
  ];
}
