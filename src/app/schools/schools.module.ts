// schools.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SchoolsComponent } from './schools.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: SchoolsComponent }
];
@NgModule({
  declarations: [
    SchoolsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class SchoolsModule { }
