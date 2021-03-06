import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseService } from '../../shared/base.service';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Marca } from '../model/marca';


@Injectable({
  providedIn: 'root'
})
export class MarcaService extends BaseService{

  constructor(private http: HttpClient) {
    super();
   }

   save(marca: any) : Observable<any>{
    //Primeiro parâmetro == URL
    //Segundo Parâmetro == BODY - Corpo de cada requisição
    return this.http.post(environment.urlWebAPI + "Marcas/", marca)
    .catch((error: any) => Observable.throw(error.error));
  }

  listAll() : Observable<any>{
    return this.http.get(environment.urlWebAPI + "Marcas/")
    .catch((error: any) => Observable.throw(error.error));
  }

  delete(id: number) : Observable<any>{
    return this.http.delete(environment.urlWebAPI + "Marcas/" + id)
    .catch((error: any) => Observable.throw(error.error));
  }

  update(marca: Marca) : Observable<any>{
    return  this.http.put(environment.urlWebAPI + "Marcas/" + marca.idMarca, marca)
    .catch((error: any) => Observable.throw(error.error));
  }

  getById(id: number) : Observable<any>{
    return this.http.get(environment.urlWebAPI + "Marcas/" + id)
    .catch((error: any) => Observable.throw(error.error));
  }
}
