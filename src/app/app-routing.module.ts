import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChartComponent } from './pages/chart/chart.component';
import { FormComponent } from './pages/form/form.component';

const routes: Routes = [
  {
    path: 'data',
    component: ChartComponent,
  },
  {
    path: '',
    redirectTo: '/data',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
