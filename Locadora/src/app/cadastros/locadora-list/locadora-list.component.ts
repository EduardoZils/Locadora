import { Component, OnInit, ViewChild } from '@angular/core';
import { ClienteService } from '../locadora-cliente/cliente.service';
import { MarcaService } from '../locadora-marca/marca.service';
import { ModeloService } from '../locadora-modelo/modelo.service';
import { VeiculoService } from '../locadora-veiculo/veiculo.service';
import { Router } from '@angular/router';
import { MatPaginator, MatSort, MatTableDataSource, MatDialog } from '@angular/material';
import { Cliente } from '../model/cliente';
//import { DialogComponent } from '../../../shared/dialog/dialog.component';
import { DialogComponent } from '../../shared/dialog/dialog.component';
import { Marca } from '../model/marca';
import { Modelo } from '../model/modelo';
import { Veiculo } from '../model/veiculo';

@Component({
  selector: 'app-locadora-list',
  templateUrl: './locadora-list.component.html',
  styleUrls: ['./locadora-list.component.css']
})
export class LocadoraListComponent implements OnInit {

  displayedColumnsCliente: string[] = ['actionsColumn', 'nome', 'cnh', 'endereco', 'telefone'];
  public dataSourceCliente: any;

  displayedColumnsMarca: string[] = ['actionsColumn', 'idMarca', 'descricao'];
  public dataSourceMarca: any;

  displayedColumnsModelo: string[] = ['actionsColumn', 'idModelo', 'descricao'];
  public dataSourceModelo: any;

  displayedColumnsVeiculo: string[] = ['actionsColumn', 'idVeiculo', 'descricao', 'cor', 'placa', 'ano', 'precoVeiculo', 'alugado'];
  public dataSourceVeiculo: any;

  constructor(private clienteService: ClienteService,
    private marcaService: MarcaService,
    private modeloService: ModeloService,
    private veiculoService: VeiculoService,
    private router: Router,
    private dialog: MatDialog) { }

    @ViewChild(MatPaginator) paginatorCustom: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;

  ngOnInit() {
    this.listAllCliente();
    this.listAllMarca();
    this.listAllModelo();
    this.listAllVeiculo();
  }  

  listAllCliente() {
    this.clienteService.listAll().subscribe(sucesso => {
      if (sucesso != null)
      console.log(sucesso);
      this.atualizaTableCliente(sucesso);
    },
      error => {
        console.log(error);
      });
  }

  atualizaTableCliente(sucesso: any) {
    this.dataSourceCliente = new MatTableDataSource<Cliente>(sucesso);
    this.dataSourceCliente.paginator = this.paginatorCustom;
    this.dataSourceCliente.sort = this.sort;
  }

  deleteCliente(id: number) {
    this.clienteService.delete(id).subscribe(sucesso => {
      if (sucesso != null)
        console.log(sucesso);
      this.listAllCliente(); 
    },
      error => {
        console.log(error);
      });
  }

  deleteConfirmationCliente(id: number) {
    let dialogRef = this.dialog.open(DialogComponent, {
      panelClass: 'custon-dialog',
      data: 'Confirmar exclusão do registro?',
      disableClose: true
    });

    dialogRef.afterClosed().subscribe(isConfirm => {
      if (isConfirm)
        this.deleteCliente(id);
    });

  }

  updateCliente(id: number) {
    this.router.navigate(['../locadora-edit-cliente/' + id]);
  }

  updateNewCliente() {
    this.router.navigate(['../locadora']);
  }

  listAllMarca() {
    this.marcaService.listAll().subscribe(sucesso => {
      if (sucesso != null)
      console.log(sucesso);
      this.atualizaTableMarca(sucesso);
    },
      error => {
        console.log(error);
      });
  }

  atualizaTableMarca(sucesso: any) {
    this.dataSourceMarca = new MatTableDataSource<Marca>(sucesso);
    this.dataSourceMarca.paginator = this.paginatorCustom;
    this.dataSourceMarca.sort = this.sort;
  }

  deleteMarca(id: number) {
    this.marcaService.delete(id).subscribe(sucesso => {
      if (sucesso != null)
        console.log(sucesso);
      this.listAllMarca(); //Não usa-se o atualizaTable() porque o mesmo irá tentar buscar um código que ja foi deletado do banco 
    },
      error => {
        console.log(error);
      });
  }

  deleteConfirmationMarca(id: number) {
    let dialogRef = this.dialog.open(DialogComponent, {
      panelClass: 'custon-dialog',
      data: 'Confirmar exclusão do registro?',
      disableClose: true
    });

    dialogRef.afterClosed().subscribe(isConfirm => {
      if (isConfirm)
        this.deleteMarca(id);
    });

  }

  updateMarca(id: number) {
    this.router.navigate(['../locadora-edit-marca/' + id]);
  }

  updateNewMarca() {
    this.router.navigate(['../locadora-marca']);
  }

  //Modelo

  listAllModelo() {
    this.veiculoService.listAll().subscribe(sucesso => {
      if (sucesso != null)
      console.log(sucesso);
      this.atualizaTableVeiculo(sucesso);
    },
      error => {
        console.log(error);
      });
  }

  atualizaTableVeiculo(sucesso: any) {
    this.dataSourceVeiculo = new MatTableDataSource<Veiculo>(sucesso);
    this.dataSourceVeiculo.paginator = this.paginatorCustom;
    this.dataSourceVeiculo.sort = this.sort;
  }

  deleteVeiculo(id: number) {
    this.veiculoService.delete(id).subscribe(sucesso => {
      if (sucesso != null)
        console.log(sucesso);
      this.listAllModelo(); //Não usa-se o atualizaTable() porque o mesmo irá tentar buscar um código que ja foi deletado do banco 
    },
      error => {
        console.log(error);
      });
  }

  deleteConfirmationVeiculo(id: number) {
    let dialogRef = this.dialog.open(DialogComponent, {
      panelClass: 'custon-dialog',
      data: 'Confirmar exclusão do registro?',
      disableClose: true
    });

    dialogRef.afterClosed().subscribe(isConfirm => {
      if (isConfirm)
        this.deleteModelo(id);
    });

  }

  updateVeiculo(id: number) {
    this.router.navigate(['../locadora-edit-veiculo/' + id]);
  }

  updateNewVeiculo() {
    this.router.navigate(['../locadora-veiculo']);
  }


   listAllVeiculo() {
    this.modeloService.listAll().subscribe(sucesso => {
      if (sucesso != null)
      console.log(sucesso);
      this.atualizaTableModelo(sucesso);
    },
      error => {
        console.log(error);
      });
  }

  atualizaTableModelo(sucesso: any) {
    this.dataSourceModelo = new MatTableDataSource<Modelo>(sucesso);
    this.dataSourceModelo.paginator = this.paginatorCustom;
    this.dataSourceModelo.sort = this.sort;
  }

  deleteModelo(id: number) {
    this.modeloService.delete(id).subscribe(sucesso => {
      if (sucesso != null)
        console.log(sucesso);
      this.listAllModelo(); //Não usa-se o atualizaTable() porque o mesmo irá tentar buscar um código que ja foi deletado do banco 
    },
      error => {
        console.log(error);
      });
  }

  deleteConfirmationModelo(id: number) {
    let dialogRef = this.dialog.open(DialogComponent, {
      panelClass: 'custon-dialog',
      data: 'Confirmar exclusão do registro?',
      disableClose: true
    });

    dialogRef.afterClosed().subscribe(isConfirm => {
      if (isConfirm)
        this.deleteModelo(id);
    });

  }

  updateModelo(id: number) {
    this.router.navigate(['../locadora-edit-modelo/' + id]);
  }

  updateNewModelo() {
    this.router.navigate(['../locadora-modelo']);
  }



}
