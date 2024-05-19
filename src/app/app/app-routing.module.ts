import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SchoolsComponent } from './schools/schools.component';
import { InvoicesComponent } from './invoices/invoices.component';
import { CollectionsComponent } from './collections/collections.component';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'schools', component: SchoolsComponent },
  { path: 'invoices', component: InvoicesComponent },
  { path: 'collections', component: CollectionsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
