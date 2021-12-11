import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  

  constructor(
    private http: HttpClient
  ) { }

  public getHello(): Observable<any> {
    return this.http.get(environment.apiHost + '/hello');
  }

   public post(msg: string): Observable<any> {
  return this.http.post(environment.apiHost + '/input', {msg: msg});
   }

   public getData(): Observable<any> {
     
    return this.http.get(environment.apiHost + '/hora');
  }

}
