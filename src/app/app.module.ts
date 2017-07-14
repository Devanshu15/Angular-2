import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { DashboardModule } from './components/dashboard/dashboard.module';
import { AppRoutingModule } from './app-routing.module';
import { AppFooterComponent } from './components/app-footer/app-footer.component';
import { AppHeaderModule } from './components/app-header/app-header.module';
@NgModule({
  declarations: [
    AppComponent,
    AppFooterComponent
  ],
  imports: [
    DashboardModule,
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    AppHeaderModule,
    HttpModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
