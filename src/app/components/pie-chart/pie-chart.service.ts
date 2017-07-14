import { Injectable } from '@angular/core';
import { DataService } from '../../services/account-data-service/data.service';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class PieChartService {
  constructor(private dataService: DataService) {}
  state;
  
  fetchPieChartOptions() {
    let accountsArray;
    this.state = new BehaviorSubject(accountsArray);
    let Subscription = this.dataService.getAccountData().subscribe( 
      (x) => {
        accountsArray = x.accountsList;
        let pieChartOptions = Object.assign({}, this.getPieChartOptions(accountsArray));
        this.state.next(pieChartOptions);
      }
    )
  }

  updatePieChart() {
    return this.state.asObservable();
  }

  getPieChartOptions(dataArr) {
    let pieChartData = [[
      { label: 'Name', role: 'domain' },
      { label: 'Cash %', role: 'data' }
    ]];
    dataArr.forEach((account, index) => {
      if (index < dataArr.length) {
        pieChartData.push([
          account.name,
          account.cash
        ]);
      }
    });
    return {
      chartType: 'PieChart',
      dataTable: pieChartData,
      options: {
        'legend': { position: 'none' },
        'backgroundColor': '#E4E4E4',
        'height': 250,
        'chartArea': { left: 0, top: 0, width: "100%", height: "100%" },
        'slices': dataArr
          .reduce((acc, curr, i) => { acc[i] = { color: curr.legend }; return acc }, { 0: { color: dataArr[0].legend } })
      }
    };
  }
}
