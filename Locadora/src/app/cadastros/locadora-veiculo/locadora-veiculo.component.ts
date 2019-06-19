import { Component, OnInit } from '@angular/core';
import { Veiculo } from '../model/veiculo';
import { VeiculoService } from '../../shared/services/veiculo.service';
import { ModeloService } from '../../shared/services/modelo.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Modelo } from '../model/modelo';

@Component({
  selector: 'app-locadora-veiculo',
  templateUrl: './locadora-veiculo.component.html',
  styleUrls: ['./locadora-veiculo.component.css']
})
export class LocadoraVeiculoComponent implements OnInit {

  veiculo: Veiculo;
  veiculoModel: Veiculo = new Veiculo()
  edit: boolean = false;

  public modeloList: Array<Modelo>;

  constructor(private modeloService: ModeloService,
    public veiculoService: VeiculoService,
    public activatedRoute: ActivatedRoute,
    public router: Router) { }

  ngOnInit() {
    this.veiculoModel = new Veiculo();
    this.modeloList = new Array<Modelo>();
    this.atualizarModeloSelect();
    this.activatedRoute.params.subscribe(param => {
      console.log(param);
      if (param.id != undefined) {
        this.getById(param.id);
        this.edit = true;
      }
    });
  }

  salvarVeiculo() {
    if (this.edit == true) {
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

  atualizarModeloSelect() {
    this.modeloService.listAll().subscribe(sucesso => {
      this.modeloList = sucesso;
    },
      error => {
        console.log(error);
      });
  }

  getById(id: number) {
    this.veiculoService.getById(id).subscribe(sucesso => {
      if (sucesso)
        this.veiculoModel = sucesso;
    }, error => {
      console.log(error);
    }

    );
  }

}
