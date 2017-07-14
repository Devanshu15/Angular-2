import { Component, OnInit, OnChanges, SimpleChanges, Input } from '@angular/core';
import { PieChartService } from './pie-chart.service';

@Component({
	selector: 'app-pie-chart',
	templateUrl: './pie-chart.component.html',
	styleUrls: ['./pie-chart.component.css'],
	providers: [PieChartService]
})
export class PieChartComponent implements OnInit {
  	pieChartOptions;
	constructor(private pieChartService: PieChartService) { }

  	ngOnInit() {
		this.pieChartService.fetchPieChartOptions();
		let subscription = this.pieChartService.updatePieChart().subscribe(
			(x) => {
				this.pieChartOptions = x;
			}
		);
  	}
}
