import {Component, inject, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PrimengConfigModule } from './primeng-config/primeng-config.module';
import {GlobalService} from "./services/global.service";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PrimengConfigModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit{
  title = 'angular-starter';

  private globalService = inject(GlobalService);

  ngOnInit() {
    this.globalService.getInfo().subscribe((data: any) => {
      console.log(data)
    })
  }
}
