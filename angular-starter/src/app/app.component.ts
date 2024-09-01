import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PrimengConfigModule } from './primeng-config/primeng-config.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PrimengConfigModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'angular-starter';
}
