import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardComponent } from './dashboard.component';

import { Ng2GoogleChartsModule } from 'ng2-google-charts';
import { PieChartComponent } from '../pie-chart/pie-chart.component';
import { AccountsModule } from '../accounts/accounts.module';
@NgModule({
  imports: [
    CommonModule,
    AccountsModule,
    Ng2GoogleChartsModule
  ],
  declarations: [DashboardComponent,PieChartComponent],
  exports:[DashboardComponent]
})
export class DashboardModule { }
