import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

type Category = 'ALL' | 'LEGALTECH' | 'FINTECH' | 'OPEN_SOURCE' | 'PERSONAL';

type Project = {
  id: string;
  title: string;
  category: Exclude<Category, 'ALL'>;
  oneLiner: string;
  role: string;
  impact: string;
  stack: string[];
  links: {
    case?: string;   // link a demo o subpágina
    github?: string; // repo
    live?: string;   // deploy
  };
  // opcional: imagen (por ahora usamos placeholder)
  image?: string;
};

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
})
export class ProjectsComponent {
  categories: Category[] = ['ALL', 'LEGALTECH', 'FINTECH', 'OPEN_SOURCE', 'PERSONAL'];
  active: Category = 'ALL';

  projects: Project[] = [
    {
      id: 'omnia-profiles',
      title: 'Omnia – Profiles Module',
      category: 'FINTECH',
      oneLiner: 'PVD responsivo con precarga y guardado seguro de perfiles.',
      role: 'Full-stack (Frontend + Backend support)',
      impact: 'Mejora de UX y reducción de tiempos de edición en operación.',
      stack: ['Angular 19', 'PrimeNG', 'Spring', 'Oracle', 'Camunda'],
      links: { case: '#', github: '#', live: '#' },
    },
    {
      id: 'app-abogado',
      title: 'App-Abogado',
      category: 'LEGALTECH',
      oneLiner: 'Plataforma multi-tenant para gestión legal y clientes.',
      role: 'Frontend lead',
      impact: 'Estructura modular + UI consistente para flujos jurídicos.',
      stack: ['Angular 19', 'Tailwind', 'Firebase', 'RxJS'],
      links: { case: '#', github: '#'},
    },
    {
      id: 'ach-lotes',
      title: 'ACH Lotes / Batch Flows',
      category: 'FINTECH',
      oneLiner: 'Análisis y mitigación de duplicidad en transferencia batch.',
      role: 'Backend support',
      impact: 'Diagnóstico de rutas SQL + propuesta de control anti-duplicado.',
      stack: ['Java 17', 'JBoss', 'Oracle PL/SQL', 'Kafka'],
      links: { case: '#'},
    },
    {
      id: 'portfolio-cine',
      title: 'Portfolio Cinematográfico',
      category: 'PERSONAL',
      oneLiner: 'Portafolio con estética techno-thriller, performance first.',
      role: 'Design + Dev',
      impact: 'Marca personal clara y memorable.',
      stack: ['Angular 19', 'Tailwind', 'UX/UI'],
      links: { github: '#', live: '#' },
    },
    {
      id: 'camunda-utils',
      title: 'Camunda Utilities',
      category: 'OPEN_SOURCE',
      oneLiner: 'Helpers para modelado y mantenimiento de procesos BPMN.',
      role: 'Autor',
      impact: 'Acelera troubleshooting y documentación de flujos.',
      stack: ['Java', 'Camunda 7/8', 'BPMN'],
      links: { github: '#' },
    },
  ];

  get filtered(): Project[] {
    if (this.active === 'ALL') return this.projects;
    return this.projects.filter(p => p.category === this.active);
  }

  setCategory(c: Category) {
    this.active = c;
  }
}
