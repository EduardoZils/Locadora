import { Component, OnInit } from '@angular/core';
import { Cliente } from '../model/cliente'
import { Marca } from '../model/marca'
import { Modelo } from '../model/modelo'
import { Veiculo } from '../model/veiculo'
import { Locacao } from '../model/locacao'
import { ClienteService } from '../locadora-cliente/cliente.service'
import { LocacaoService } from '../../shared/services/locacao.service'
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-locadora',
  templateUrl: './locadora.component.html',
  styleUrls: ['./locadora.component.css']
})
export class LocadoraComponent implements OnInit {

  cliente: Cliente;
  clienteModel: Cliente = new Cliente()
  edit: boolean = false;


  constructor(private clienteService: ClienteService,
    public activatedRoute: ActivatedRoute,
    public router: Router) { }

    

  ngOnInit() {
    this.clienteModel = new Cliente();
    this.activatedRoute.params.subscribe(param => {
      console.log(param);
    if (param.id != undefined) {
      this.getById(param.id);
      this.edit = true;
    }
  });
  }

  getById(id: number) {
    this.clienteService.getById(id).subscribe(sucesso => {
      if (sucesso)
        this.clienteModel = sucesso;
    }, error => {
      console.log(error);
    }

    );
  }
  
  salvarCliente() {
    if (this.edit) {
      console.log("Atualiza Cliente")
      console.log(this.clienteModel)
      this.clienteService.edit(this.clienteModel).subscribe(sucesso => {
        if (sucesso != null){
          console.log("sucesso");
          this.router.navigate(['../locadora-list']);
        }
      },
        error => {
          console.log(error);
        });
    } else {
      console.log("salvar Cliente")
      console.log(this.clienteModel)
      this.clienteService.save(this.clienteModel).subscribe(sucesso => {
        if (sucesso != null){
          console.log("sucesso");
          this.router.navigate(['../locadora-list']);
        }
      },
        error => {
          console.log(error);
        });
    }
  }
  
  voltar(){
    this.router.navigate(['../locadora-list']);
  }
}
