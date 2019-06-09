import { Component, OnInit } from '@angular/core';
import { Cliente } from '../model/cliente'
import { Marca } from '../model/marca'
import { Modelo } from '../model/modelo'
import { Veiculo } from '../model/veiculo'
import { Locacao } from '../model/locacao'
import { ClienteService } from '../../shared/dialog/cliente.service'
import { MarcaService } from '../../shared/dialog/marca.service'
import { ModeloService } from '../../shared/dialog/modelo.service'
import { VeiculoService } from '../../shared/dialog/veiculo.service'
import { LocacaoService } from '../../shared/dialog/locacao.service'
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-locadora',
  templateUrl: './locadora.component.html',
  styleUrls: ['./locadora.component.css']
})
export class LocadoraComponent implements OnInit {

  cliente: Cliente;
  clienteModel: Cliente = new Cliente()
  marca: Marca;
  marcaModel: Marca = new Marca();
  modelo: Modelo;
  modeloModel: Modelo = new Modelo();
  veiculo: Veiculo;
  veiculoModel: Veiculo = new Veiculo();
  locacao: Locacao;
  locacaoModel: Locacao = new Locacao();
  edit: boolean = false;

  constructor(private clienteService: ClienteService,
    private marcaService: MarcaService,
    private modeloService: ModeloService,
    private veiculoService: VeiculoService,
    private locacaoService: LocacaoService,
    public activatedRoute: ActivatedRoute,
    public router: Router) { }

    displayColumnsCliente: string[] = ['actionsColumn', 'idcliente', 'nmcliente', 'cnh', 'endereco', 'telefone'];

  ngOnInit() {
    this.cliente = new Cliente();
    this.cliente = new Cliente();
    this.cliente = new Cliente();

  }


  salvarCliente() {
    if (this.edit) {
      console.log("Atualiza Cliente")
      console.log(this.clienteModel)
      this.clienteService.edit(this.clienteModel).subscribe(sucesso => {
        if (sucesso != null)
          console.log("sucesso");
      },
        error => {
          console.log(error);
        });
    } else {
      console.log("salvar Cliente")
      console.log(this.clienteModel)
      this.clienteService.save(this.clienteModel).subscribe(sucesso => {
        if (sucesso != null)
          console.log("sucesso");
      },
        error => {
          console.log(error);
        });
    }
  }

}
