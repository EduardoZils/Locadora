import { Component, OnInit, ViewChild } from '@angular/core';
import { ClienteService } from '../../shared/services/cliente.service';
import { Router } from '@angular/router';
import { MatPaginator, MatSort, MatTableDataSource, MatDialog } from '@angular/material';
import { Cliente } from '../model/cliente';
//import { DialogComponent } from '../../../shared/dialog/dialog.component';
import { DialogComponent } from '../../shared/dialog/dialog.component';

@Component({
  selector: 'app-locadora-list',
  templateUrl: './locadora-list.component.html',
  styleUrls: ['./locadora-list.component.css']
})
export class LocadoraListComponent implements OnInit {

  displayedColumnsCliente: string[] = ['actionsColumn', 'nome', 'cnh', 'endereco', 'telefone'];
  public dataSourceCliente: any;

  constructor(private clienteService: ClienteService,
    private router: Router,
    private dialog: MatDialog) { }

    @ViewChild(MatPaginator) paginatorCustom: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;

  ngOnInit() {
    this.listAll();

  }  
  listAll() {
    this.clienteService.listAll().subscribe(sucesso => {
      if (sucesso != null)
      console.log(sucesso);
      this.atualizaTable(sucesso);
    },
      error => {
        console.log(error);
      });
  }

  atualizaTable(sucesso: any) {
    this.dataSourceCliente = new MatTableDataSource<Cliente>(sucesso);
    this.dataSourceCliente.paginator = this.paginatorCustom;
    this.dataSourceCliente.sort = this.sort;
  }

  delete(id: number) {
    this.clienteService.delete(id).subscribe(sucesso => {
      if (sucesso != null)
        console.log(sucesso);
      this.listAll(); //Não usa-se o atualizaTable() porque o mesmo irá tentar buscar um código que ja foi deletado do banco 
    },
      error => {
        console.log(error);
      });
  }

  deleteConfirmation(id: number) {
    let dialogRef = this.dialog.open(DialogComponent, {
      panelClass: 'custon-dialog',
      data: 'Confirmar exclusão do registro?',
      disableClose: true
    });

    dialogRef.afterClosed().subscribe(isConfirm => {
      if (isConfirm)
        this.delete(id);
    });

  }

  update(id: number) {
    this.router.navigate(['../locadora-edit-cliente/' + id]);
  }

  updateNew() {
    this.router.navigate(['../locadora']);
  }



}
