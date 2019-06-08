import { Injectable } from '@angular/core';
import { BaseService } from '../../shared/base.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Locacao } from 'src/app/cadastros/model/locacao';

@Injectable({
  providedIn: 'root'
})
export class LocacaoService extends BaseService{

  constructor(private http: HttpClient) { 
    super();  
  }

  save(locacao: any) : Observable<any>{
    //Primeiro parâmetro == URL
    //Segundo Parâmetro == BODY - Corpo de cada requisição
    return this.http.post(environment.urlWebAPI + "Locacaos/", locacao)
    .catch((error: any) => Observable.throw(error.error));
  }

  listAll() : Observable<any>{
    return this.http.get(environment.urlWebAPI + "Locacaos/")
    .catch((error: any) => Observable.throw(error.error));
  }

  delete(id: number) : Observable<any>{
    return this.http.delete(environment.urlWebAPI + "Locacaos/" + id)
    .catch((error: any) => Observable.throw(error.error));
  }

  
  update(locacao: Locacao) : Observable<any>{
    return  this.http.put(environment.urlWebAPI + "Locacaos/" + locacao.idLocacao, locacao)
    .catch((error: any) => Observable.throw(error.error));
  }

  getById(id: number) : Observable<any>{
    return this.http.get(environment.urlWebAPI + "Locacaos/" + id)
    .catch((error: any) => Observable.throw(error.error));
  }
}
