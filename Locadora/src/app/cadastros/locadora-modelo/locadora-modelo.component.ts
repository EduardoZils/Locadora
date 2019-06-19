import { Component, OnInit } from '@angular/core';
import { Marca } from '../model/marca';
import { Modelo } from '../model/modelo';
import { ModeloService } from '../../shared/services/modelo.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MarcaService } from '../../shared/services/marca.service';

@Component({
  selector: 'app-locadora-modelo',
  templateUrl: './locadora-modelo.component.html',
  styleUrls: ['./locadora-modelo.component.css']
})
export class LocadoraModeloComponent implements OnInit {

  public dataSourceMarca: any;
  public marcaSel: Marca = new Marca();
  public marcaSelId: number;
  public marcaList: Array<Marca>;
  

  public modeloList: Array<Modelo>;

  modelo: Modelo;
  modeloModel: Modelo = new Modelo()
  edit: boolean = false;

  constructor(private modeloService: ModeloService,
    public marcaService: MarcaService,
    public activatedRoute: ActivatedRoute,
    public router: Router) { }

  ngOnInit() {
    this.modeloModel = new Modelo();
    this.marcaList = new Array<Marca>();
    this.atualizarMarcaSelect();
    this.activatedRoute.params.subscribe(param => {
      console.log(param);
      if (param.id != undefined) {
        this.getById(param.id);
        this.edit = true;
      }
    });
  }

  salvarModelo() {
    this.atualizarMarcaSelect();
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
      console.log("salvar Modelo")
      console.log(this.modeloModel)
      this.modeloService.save(this.modeloModel).subscribe(sucesso => {
        if (sucesso != null)
          console.log(sucesso);
      },
        error => {
          console.log(error);
        });
    }
  }

  getById(id: number) {
    this.modeloService.getById(id).subscribe(sucesso => {
      if (sucesso)
        this.modeloModel = sucesso;
    }, error => {
      console.log(error);
    }

    );
  }

  atualizarMarcaSelect() {
    this.marcaService.listAll().subscribe(sucesso => {
        this.marcaList = sucesso;
    },
    error => {
      console.log(error);
    });
  }
}
