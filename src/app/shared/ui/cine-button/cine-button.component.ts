import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

type Variant = 'primary' | 'ghost' | 'outline';

@Component({
  selector: 'app-cine-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cine-button.component.html',
})
export class CineButtonComponent {
  @Input({ required: true }) label!: string;
  @Input() href: string | null = null;
  @Input() target: string | null = null;
  @Input() variant: Variant = 'primary';
}
