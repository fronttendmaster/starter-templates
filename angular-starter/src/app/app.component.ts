import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PrimengConfigModule } from './primeng-config/primeng-config.module';
import { GlobalService } from './services/global.service';
import { createBreadcrumbItem, Menu, menus } from './constants/menuItems';
import { MenuItem } from 'primeng/api';
import { JsonPipe } from '@angular/common';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PrimengConfigModule, JsonPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'angular-starter';
  menuItems = menus;
  items: MenuItem[] = [];

  home!: MenuItem;

  private globalService = inject(GlobalService);

  ngOnInit() {
    console.log(this.menuItems);
    // this.items = [
    //   { label: 'Electronics' },
    //   { label: 'Computer' },
    //   { label: 'Accessories' },
    //   { label: 'Keyboard' },
    //   { label: 'Wireless' },
    // ];

    this.home = { icon: 'pi pi-home', routerLink: '/' };
  }

  createBreadcumb(item: MenuItem) {
    this.items = [...[item]];
    console.log(this.items);
    console.log(createBreadcrumbItem('About', this.items));
  }
}
