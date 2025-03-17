import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FrontpageComponent } from './frontpage/frontpage.component'; 
<<<<<<< HEAD
import { QuestionsComponent } from './component/questions-customer/questions.component';
import { NavbarCustomerComponent } from './component/navbar-customer/navbar-customer.component';
=======
import { QuestionsComponent } from './component/questions/questions.component';
import { routes } from './app.routes'; // Import routes
import { AppComponent } from './app.component'; // Import AppComponent
>>>>>>> 75e81cd59536f3ea249c5f008a43164a1f3394fd

@NgModule({
  declarations: [
    
  ],
  imports: [
    AppComponent,
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes), 
    FrontpageComponent, 
    QuestionsComponent,
    NavbarCustomerComponent
  ],
  providers: [],
  bootstrap: []
})
export class AppModule { }