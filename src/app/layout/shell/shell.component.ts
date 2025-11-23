// src/app/layout/shell/shell.component.ts
import { Component } from '@angular/core';

// layout
import { BackgroundLayerComponent } from '../sections/background-layer/background-layer.component';
import { NavbarGhostComponent } from '../sections/navbar-ghost/navbar-ghost.component';
import { FooterCreditsComponent } from '../sections/footer-credits/footer-credits.component';

// features
import { HeroComponent } from '../../features/hero/hero.component';
import { AboutComponent } from '../../features/about/about.component';
import { ProjectsComponent } from '../../features/projects/projects.component';
import { StackComponent } from '../../features/stack/stack.component';
import { TimelineComponent } from '../../features/timeline/timeline.component';
import { ImpactComponent } from '../../features/impact/impact.component';
import { ContactComponent } from '../../features/contact/contact.component';

@Component({
  selector: 'app-shell',
  standalone: true,
  imports: [
    BackgroundLayerComponent,
    NavbarGhostComponent,
    FooterCreditsComponent,
    HeroComponent,
    AboutComponent,
    ProjectsComponent,
    StackComponent,
    TimelineComponent,
    ImpactComponent,
    ContactComponent,
  ],
  templateUrl: './shell.component.html',
})
export class ShellComponent {}
