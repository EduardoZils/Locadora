import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LocadoraComponent } from './cadastros/locadora-cliente/locadora.component';
import { LocadoraListComponent } from './cadastros/locadora-list/locadora-list.component';
import { LocadoraMarcaComponent } from './cadastros/locadora-marca/locadora-marca.component';
import { LocadoraModeloComponent } from './cadastros/locadora-modelo/locadora-modelo.component';
import { LocadoraVeiculoComponent } from './cadastros/locadora-veiculo/locadora-veiculo.component';


const routes: Routes = [
  //CLIENTE
  { path: 'locadora', component: LocadoraComponent },
  { path: 'locadora-edit-cliente/:id', component: LocadoraComponent },

  //MARCA
  { path: 'locadora-marca', component: LocadoraMarcaComponent },
  { path: 'locadora-edit-marca/:id', component: LocadoraMarcaComponent },

  //MODELO
  { path: 'locadora-modelo', component: LocadoraModeloComponent },
  { path: 'locadora-edit-modelo/:id', component: LocadoraModeloComponent },

  //VEICULO
  { path: 'locadora-veiculo', component: LocadoraVeiculoComponent },
  { path: 'locadora-edit-veiculo/:id', component: LocadoraVeiculoComponent },

  { path: 'locadora-list', component: LocadoraListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
