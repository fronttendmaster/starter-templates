import { Component } from '@angular/core';
import { PrimengConfigModule } from '../../primeng-config/primeng-config.module';

@Component({
  selector: 'app-app-layout',
  standalone: true,
  imports: [PrimengConfigModule],
  templateUrl: './app-layout.component.html',
  styleUrl: './app-layout.component.css',
})
export class AppLayoutComponent {}
