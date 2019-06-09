import { Injectable } from '@angular/core';
import { Cliente } from '../../cadastros/model/cliente';
import { environment } from "../../../environments/environment";
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { BaseService } from '../base.service';

@Injectable({
  providedIn: 'root'
})
export class ClienteService extends BaseService {

  constructor(private http: HttpClient) {
    super();
   }

   save(cliente: Cliente) : Observable<any>{
    //primeiro o parametro = URL
    //segundo parametro = BODY - corpo da requisição
    return this.http.post(environment.urlWebAPI + "Clientes/", cliente)
    .catch((error : any) => Observable.throw(error.error))
  }

  listAll() : Observable<any>{
    //primeiro o parametro = URL
    //segundo parametro = BODY - corpo da requisição
    return this.http.get(environment.urlWebAPI + "Clientes/")
    .catch((error : any) => Observable.throw(error.error))
  }

  getById(id: number) : Observable<any>{
    return this.http.get(environment.urlWebAPI + "Clientes/" + id)
    .catch((error : any) => Observable.throw(error.error))
  }

  delete(id: number) : Observable<any>{
    return this.http.delete(environment.urlWebAPI + "Clientes/" + id)
    .catch((error : any) => Observable.throw(error.error))
  }

  edit(cliente : Cliente) : Observable<any> {
    return this.http.put(environment.urlWebAPI + "Clientes/" + cliente.idCliente, cliente)
    .catch((error : any) => Observable.throw(error.error))
  }
}

//locadora-edit-cliente/:id