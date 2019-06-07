import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatInputModule, MatRadioModule, MatButtonModule, 
  MatTableModule, MatIconModule, MatPaginatorModule, MatSortModule, MatExpansionModule, MatSelectModule, MatDialogModule, MatProgressSpinnerModule } from '@angular/material';
  import { DatePipe } from '@angular/common';
import { LocadoraComponent } from './cadastros/locadora/locadora.component';
import { LocadoraListComponent } from './cadastros/locadora-list/locadora-list.component';

@NgModule({
  declarations: [
    AppComponent,
    LocadoraComponent,
    LocadoraListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,

    MatInputModule,
    MatDialogModule,
    MatRadioModule,
    MatButtonModule, 
    MatTableModule,
    MatIconModule,
    HttpClientModule,
    MatPaginatorModule,
    MatSortModule,
    MatExpansionModule,
    MatSelectModule,
    BrowserAnimationsModule,
    
  ],
  providers: [HttpClient, DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
