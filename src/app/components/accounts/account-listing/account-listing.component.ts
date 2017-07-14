import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { DataService } from '../../../services/account-data-service/data.service';

@Component({
  selector: 'app-account-listing',
  templateUrl: './account-listing.component.html',
  styleUrls: ['./account-listing.component.css']
})
export class AccountListingComponent implements OnInit {
  constructor(private dataService: DataService) { }
  localAccounts;
  total;
		
  subscription;
  pieChartData: (number | string | object)[][];
  pieChartOptions;
  ngOnInit() {
    this.dataService.setAccountData();
    this.subscription = this.dataService.getAccountData().subscribe(x => {
      this.localAccounts = x.accountsList;
      this.total = x.total;
    }
    );
  }
}
