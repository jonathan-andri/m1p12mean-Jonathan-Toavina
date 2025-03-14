import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FrontpageComponent } from './frontpage/frontpage.component'; 
import { QuestionsComponent } from './component/questions/questions.component';
import { routes } from './app.routes'; // Import routes
import { AppComponent } from './app.component'; // Import AppComponent
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
    RouterModule.forRoot(routes), 
    FrontpageComponent, 
    QuestionsComponent 
  ],
  providers: [],
  bootstrap: []
})
export class AppModule { }