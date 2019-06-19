import { Component, OnInit } from '@angular/core';
import { MarcaService } from '../../shared/services/marca.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Marca } from '../model/marca';

@Component({
  selector: 'app-locadora-marca',
  templateUrl: './locadora-marca.component.html',
  styleUrls: ['./locadora-marca.component.css']
})
export class LocadoraMarcaComponent implements OnInit {

  marca: Marca;
  marcaModel: Marca = new Marca()
  edit: boolean = false;

  constructor(private marcaService: MarcaService,
    public activatedRoute: ActivatedRoute,
    public router: Router) { }

  ngOnInit() {
    this.marcaModel = new Marca();
    this.activatedRoute.params.subscribe(param => {
      console.log(param);
      if (param.id != undefined) {
        this.getById(param.id);
        this.edit = true;
      }
    });
  }

  getById(id: number) {
    this.marcaService.getById(id).subscribe(sucesso => {
      if (sucesso)
        this.marcaModel = sucesso;
    }, error => {
      console.log(error);
    }

    );
  }

  salvarMarca() {
    if (this.edit) {
      console.log("Atualiza Marca")
      console.log(this.marcaModel)
      this.marcaService.update(this.marcaModel).subscribe(sucesso => {
        if (sucesso != null)
          console.log("sucesso");
        this.marcaModel = sucesso;
      },
        error => {
          console.log(error);
        });
    } else {
      this.marcaService.save(this.marcaModel).subscribe(sucesso => {
        if (sucesso != null)
          console.log(sucesso);
      },
        error => {
          console.log(error);
        });
    }
  }


}
