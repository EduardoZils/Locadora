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

  public dataSourceMarca: any;
  public marcaSel: Marca = new Marca();
  public marcaSelId: number;  
  public marcaList: Array<Marca>;

  constructor(private clienteService: ClienteService,
    private marcaService: MarcaService,
    private modeloService: ModeloService,
    private veiculoService: VeiculoService,
    private locacaoService: LocacaoService,
    public activatedRoute: ActivatedRoute,
    public router: Router) { }

    displayColumnsCliente: string[] = ['actionsColumn', 'idcliente', 'nmcliente', 'cnh', 'endereco', 'telefone'];
    

  ngOnInit() {
    this.clienteModel = new Cliente();
    this.marcaModel = new Marca();
    this.modeloModel = new Modelo();
    this.veiculoModel = new Veiculo();
    this.atualizarMarcaSelect();
    

  }

  salvarVeiculo(){
    if (this.edit) {
      console.log("Atualiza Veiculo")
      console.log(this.veiculoModel)
      this.veiculoService.update(this.veiculoModel).subscribe(sucesso => {
        if (sucesso != null)
          console.log("sucesso");
          this.veiculoModel = sucesso;
      },
        error => {
          console.log(error);
        });
    } else {
      console.log("salvar Veiculo")
      console.log(this.veiculoModel)
      this.veiculoService.save(this.veiculoModel).subscribe(sucesso => {
        if (sucesso != null)
          console.log("sucesso");
          this.veiculoModel = sucesso;
      },
        error => {
          console.log(error);
        });
    }
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

  salvarMarca() {
    if (this.edit) {
      console.log("Atualiza Marca")
      console.log(this.marca)
      this.marcaService.update(this.marca).subscribe(sucesso => {
        if (sucesso != null)
          console.log("sucesso");
          this.marca = sucesso;
      },
        error => {
          console.log(error);
        });
    } else {
      this.marcaService.save(this.marca).subscribe(sucesso => {
        if (sucesso != null)
          console.log(sucesso);
      },
        error => {
          console.log(error);
        });
    }
  }

  atualizarMarcaSelect() {
    this.marcaService.listAll().subscribe(sucesso => {
        this.marcaList = sucesso;
        console.log("Sucesso" + sucesso);
      
    },
    error => {

    });
  }
  
  


  salvarModelo() {
    if (this.edit) {
      console.log("Atualiza Modelo")
      console.log(this.modeloModel)
      this.modeloService.update(this.modeloModel).subscribe(sucesso => {
        if (sucesso != null)
          console.log("sucesso");
      },
        error => {
          console.log(error);
        });
    } else {
      console.log("salvar Marca")
      console.log(this.modeloModel)
      this.modeloService.save(this.modeloModel).subscribe(sucesso => {
        if (sucesso != null)
          console.log("sucesso");
      },
        error => {
          console.log(error);
        });
    }
  }

}
