import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountListingComponent } from './account-listing/account-listing.component';
import { AccountDetailsComponent } from './account-details/account-details.component';


@NgModule({
  declarations: [
    AccountListingComponent,
    AccountDetailsComponent
  ],
  exports: [
    AccountListingComponent,
    AccountDetailsComponent
  ],
  imports:[
    CommonModule
  ]
})
export class AccountsModule { }
