import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

type AboutBlock = {
  title: string;
  subtitle: string;
  body: string;
};

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
})
export class AboutComponent {
  blocks: AboutBlock[] = [
    {
      title: 'Origen',
      subtitle: 'Perfil',
      body:
        'Full-stack dev con experiencia en plataformas legales y financieras. Me gusta entender el problema completo antes de tocar código.',
    },
    {
      title: 'Lo que hago',
      subtitle: 'Operación',
      body:
        'Construyo microservicios en Java/Spring, automatizo flujos con Camunda y creo front limpio y responsive con Angular + PrimeNG.',
    },
    {
      title: 'Lo que busco',
      subtitle: 'Rumbo',
      body:
        'Sistemas robustos, mantenibles y con buen UX. Priorizar claridad, trazabilidad y entrega real en producción.',
    },
  ];
}
