import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseService } from '../../shared/base.service';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Modelo } from '../model/modelo';


@Injectable({
  providedIn: 'root'
})
export class ModeloService extends BaseService {

  constructor(private http: HttpClient) {
    super();
   }

   save(modelo: any) : Observable<any>{
    return this.http.post(environment.urlWebAPI + "Modeloes/", modelo)
    .catch((error: any) => Observable.throw(error.error));
  }

  listAll() : Observable<any>{
    return this.http.get(environment.urlWebAPI + "Modeloes/")
    .catch((error: any) => Observable.throw(error.error));
  }

  delete(id: number) : Observable<any>{
    return this.http.delete(environment.urlWebAPI + "Modeloes/" + id)
    .catch((error: any) => Observable.throw(error.error));
  }

  update(modelo: Modelo) : Observable<any>{
    return  this.http.put(environment.urlWebAPI + "Modeloes/" + modelo.idModelo, modelo)
    .catch((error: any) => Observable.throw(error.error));
  }

  getById(id: number) : Observable<any>{
    return this.http.get(environment.urlWebAPI + "Modeloes/" + id)
    .catch((error: any) => Observable.throw(error.error));
  }
}
