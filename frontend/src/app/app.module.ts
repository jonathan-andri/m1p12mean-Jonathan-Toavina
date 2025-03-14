import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { routes } from './app.routes';
import { AppComponent } from './app.component'; 
import { FrontpageComponent } from './frontpage/frontpage.component'; 
import { QuestionsComponent } from './component/questions/questions.component';

@NgModule({
  declarations: [
  ],
  imports: [
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