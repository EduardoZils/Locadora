import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatInputModule, MatRadioModule, MatButtonModule, 
  MatTableModule, MatIconModule, MatPaginatorModule, MatSortModule, MatExpansionModule, MatDialogModule, MatProgressSpinnerModule } from '@angular/material';

import {MatSelectModule} from '@angular/material/select';
import { DatePipe } from '@angular/common';
import { NgxSpinnerModule } from 'ngx-spinner';
import { LocadoraComponent } from './cadastros/locadora-cliente/locadora.component';
import { LocadoraListComponent } from './cadastros/locadora-list/locadora-list.component';
import { DialogComponent } from './shared/dialog/dialog.component';
import { LocadoraMarcaComponent } from './cadastros/locadora-marca/locadora-marca.component';
import { LocadoraModeloComponent } from './cadastros/locadora-modelo/locadora-modelo.component';
import { LocadoraVeiculoComponent } from './cadastros/locadora-veiculo/locadora-veiculo.component';

@NgModule({
  declarations: [
    AppComponent,
    LocadoraComponent,
    LocadoraListComponent,
    DialogComponent,
    LocadoraMarcaComponent,
    LocadoraModeloComponent,
    LocadoraVeiculoComponent
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
    NgxSpinnerModule
  
  ],
  providers: [HttpClient, DatePipe],
  entryComponents: [
    DialogComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
