import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

type Link = {
  label: string;
  href: string;
  kind: 'email' | 'github' | 'linkedin' | 'cv';
};

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact.component.html',
})
export class ContactComponent {
  links: Link[] = [
    { label: 'Email', href: 'mailto:tuemail@correo.com', kind: 'email' },
    { label: 'GitHub', href: 'https://github.com/tuusuario', kind: 'github' },
    { label: 'LinkedIn', href: 'https://linkedin.com/in/tuusuario', kind: 'linkedin' },
    { label: 'CV', href: 'assets/cv.pdf', kind: 'cv' },
  ];
}
