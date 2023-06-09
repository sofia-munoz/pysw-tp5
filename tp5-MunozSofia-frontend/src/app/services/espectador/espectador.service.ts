import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class EspectadorService {

  baseUrl: string = "http://localhost:3000/api/espectador";
  constructor(private _http: HttpClient) {
  }

  public getEspectadores(): Observable<any> {
    return this._http.get(this.baseUrl);
  }
}
