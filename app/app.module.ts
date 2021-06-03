import { BrowserModule } from '@angular/platform-browser';
import { APP_INITIALIZER, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ServiceService } from './service.service';
import { urlServices } from './serviceUrls';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilterPipe } from '../app/searchpipe/filter.pipe'
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,HttpClientModule, FormsModule, ReactiveFormsModule
  ],
 
  bootstrap: [AppComponent],
  providers: [ServiceService,urlServices]
})
export class AppModule { }
