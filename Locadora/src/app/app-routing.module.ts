import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LocadoraComponent } from './cadastros/locadora/locadora.component';
import { LocadoraListComponent } from './cadastros/locadora-list/locadora-list.component';

const routes: Routes = [
  {path: 'locadora', component: LocadoraComponent},
  {path: 'locadora-edit-cliente/:id', component: LocadoraComponent},
  {path: 'locadora-edit-marca/:id', component: LocadoraComponent},
  {path: 'locadora-edit-modelo/:id', component: LocadoraComponent},
  {path: 'locadora-edit-locadora/:id', component: LocadoraComponent},
  {path: 'locadora-edit-veiculo/:id', component: LocadoraComponent},
  {path: 'locadora-list', component: LocadoraListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
