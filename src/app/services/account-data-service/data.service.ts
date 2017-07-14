import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class DataService {
	state;
	initialState;
	updatedState;
	
	setAccountData() {
		let initialAccounts = [
			{name: 'Brokerage Account3', marketValue: 1999990.00, cash: 1995826.00, legend:this.getRandomColor()},
			{name: 'Account3', marketValue: 1948954.00, cash: 1936954.00, legend:this.getRandomColor()}
		];
		let total = {name: 'Total', marketValue: 3948944.00, cash: 3932780.00};
		this.initialState = {
			accountsList: initialAccounts,
			total: total,
		};
		this.updatedState = Object.assign({}, this.initialState);
		this.state = new BehaviorSubject(this.initialState);
	}

	getAccountData() {
		return this.state.asObservable();
	}

	refresh() {
		this.updatedState = Object.assign({}, this.initialState);
		this.state.next(this.updatedState);
	}

	updateTotal(arr) {
		let total = {marketValue: 0,
		cash: 0}
		arr.forEach(element => {
			total.marketValue += element.marketValue;
			total.cash += element.cash
		});
		return total;
	}
	addAccount() {
		let updatedTotal = {name: 'Total', marketValue: 0, cash: 0};
		let accArray = this.updatedState.accountsList.slice();
		let marketValue:any = (Math.random() * 10000000).toFixed(2);
		accArray.push({name: 'Random Account', marketValue: Number(marketValue), cash: (marketValue - 200), legend:this.getRandomColor()});
		let marketAndCashTotal = this.updateTotal(accArray);
		updatedTotal.marketValue = marketAndCashTotal.marketValue;
		updatedTotal.cash = marketAndCashTotal.cash;
		updatedTotal.name = 'Total';
		let newUpdatedState = {
			accountsList: accArray,
			total: updatedTotal
		}
		this.updatedState = Object.assign({}, newUpdatedState)
		this.state.next(this.updatedState);
  	}
	generateRandomColor() {
		let letters:string = '0123456789ABCDEF';
		let color:string = '#';
		for (let i = 0; i < 6; i++ ) {
			color += letters[Math.floor(Math.random() * 16)];
		}
		return color;
  	}
	getRandomColor() {
		let colors:Array<string> = [];
		let color:string = this.generateRandomColor();
		while(colors.includes(color)) {
			color = this.generateRandomColor();
		}
		return color;
	}
}
