import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { routes } from './app.routes'; // Import routes
import { AppComponent } from './app.component'; // Import AppComponent
import { FrontpageComponent } from './frontpage/frontpage.component'; // Import FrontpageComponent
import { AdminRoutingModule } from './admin/admin-routing.module';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { CustomerComponent } from './admin/customer/customer.component';
import { AdminComponent } from './admin/admin.component';

@NgModule({
  declarations: [
    
  ],
  imports: [
    AdminComponent,
    DashboardComponent,
    CustomerComponent,
    AppComponent,
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes), // Configure the router with the routes
    FrontpageComponent // Add FrontpageComponent to the imports
  ],
  providers: [],
  bootstrap: []
})
export class AppModule { }