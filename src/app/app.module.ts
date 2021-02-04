import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material';
import {MatNativeDateModule} from '@angular/material'

import {FormsModule} from '@angular/forms';
import { ChartComponent } from './pages/chart/chart.component';
import { AccionsService } from './_service/accion.service';

import {HttpClientModule} from '@angular/common/http';
import { FormComponent } from './pages/form/form.component'

@NgModule({
  declarations: [
    AppComponent,
    ChartComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [AccionsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
