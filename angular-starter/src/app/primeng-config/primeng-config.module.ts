import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { BreadcrumbModule } from 'primeng/breadcrumb';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  exports: [ButtonModule, BreadcrumbModule],
})
export class PrimengConfigModule {}
