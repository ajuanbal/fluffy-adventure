import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

type StackGroup = {
  title: string;
  subtitle: string;
  items: { name: string; highlight?: boolean }[];
};

@Component({
  selector: 'app-stack',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './stack.component.html',
})
export class StackComponent {
  groups: StackGroup[] = [
    {
      title: 'CORE',
      subtitle: 'Backend / BPM',
      items: [
        { name: 'Java 17', highlight: true },
        { name: 'Spring Boot 3.x', highlight: true },
        { name: 'Oracle PL/SQL', highlight: true },
        { name: 'Camunda 7/8', highlight: true },
        { name: 'JBoss EAP 7.4' },
        { name: 'RabbitMQ / Kafka' },
      ],
    },
    {
      title: 'FRONT',
      subtitle: 'UI / Web',
      items: [
        { name: 'Angular 19', highlight: true },
        { name: 'PrimeNG', highlight: true },
        { name: 'Tailwind CSS', highlight: true },
        { name: 'RxJS' },
        { name: 'TypeScript' },
        { name: 'Responsive Design' },
      ],
    },
    {
      title: 'DEVOPS',
      subtitle: 'Cloud / CI-CD',
      items: [
        { name: 'Docker / Compose', highlight: true },
        { name: 'Kubernetes (base)' },
        { name: 'Jenkins Pipelines', highlight: true },
        { name: 'GCP' },
        { name: 'Azure' },
        { name: 'Linux' },
      ],
    },
  ];
}
