import { Injectable } from '@angular/core';
import { Cliente } from '../../cadastros/model/cliente';
import { environment } from "../../../environments/environment";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClienteService extends BaseService{

  constructor(private http: HttpClient) {
    super();
   }

   save(cliente: Cliente) : Observable<any>{
    //primeiro o parametro = URL
    //segundo parametro = BODY - corpo da requisição
    return this.http.post(environment.urlWebAPI + "Locadora/", cliente)
    .catch((error : any) => Observable.throw(error.error))
  }

  listAll() : Observable<any>{
    //primeiro o parametro = URL
    //segundo parametro = BODY - corpo da requisição
    return this.http.get(environment.urlWebAPI + "Containers/")
    .catch((error : any) => Observable.throw(error.error))
  }

  getById(id: number) : Observable<any>{
    return this.http.get(environment.urlWebAPI + "Containers/" + id)
    .catch((error : any) => Observable.throw(error.error))
  }

  delete(id: number) : Observable<any>{
    return this.http.delete(environment.urlWebAPI + "Containers/" + id)
    .catch((error : any) => Observable.throw(error.error))
  }

  edit(cliente : Cliente) : Observable<any> {
    return this.http.put(environment.urlWebAPI + "Containers/" + cliente.idcliente, cliente)
    .catch((error : any) => Observable.throw(error.error))
  }
}

//locadora-edit-cliente/:id