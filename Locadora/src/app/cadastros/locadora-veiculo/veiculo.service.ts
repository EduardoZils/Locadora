import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseService } from '../../shared/base.service';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Veiculo } from '../model/veiculo';


@Injectable({ 
  providedIn: 'root'
})
export class VeiculoService extends BaseService {


  constructor(private http: HttpClient) {
    super();
   }

   save(veiculo: any) : Observable<any>{
    //Primeiro parâmetro == URL
    //Segundo Parâmetro == BODY - Corpo de cada requisição
    return this.http.post(environment.urlWebAPI + "Veiculoes/", veiculo)
    .catch((error: any) => Observable.throw(error.error));
  }

  listAll() : Observable<any>{
    return this.http.get(environment.urlWebAPI + "Veiculoes/")
    .catch((error: any) => Observable.throw(error.error));
  }

  delete(id: number) : Observable<any>{
    return this.http.delete(environment.urlWebAPI + "Veiculoes/" + id)
    .catch((error: any) => Observable.throw(error.error));
  }

  update(veiculo: Veiculo) : Observable<any>{
    return  this.http.put(environment.urlWebAPI + "Veiculoes/" + veiculo.idVeiculo, veiculo)
    .catch((error: any) => Observable.throw(error.error));
  }

  getById(id: number) : Observable<any>{
    return this.http.get(environment.urlWebAPI + "Veiculoes/" + id)
    .catch((error: any) => Observable.throw(error.error));
  }

}
