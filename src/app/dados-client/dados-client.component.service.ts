import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observer } from "rxjs/Rx";
import { HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";
import { Subscription } from 'rxjs/Subscription';



const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class UserService {

  constructor(private http:HttpClient) {}

	private PATH = '/dadosClient';

    public carregardadosClient(): Observable<any> {
        let retornoObserver;
        let retorno = new Observable(observer => (retornoObserver = observer));
        this.http.get, this.PATH.subscribe(data => {
            if (retornoObserver) {
              retornoObserver.next(data);
            }
          });
        return retorno;
      } 

}
