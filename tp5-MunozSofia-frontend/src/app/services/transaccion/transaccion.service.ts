import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Transaccion } from 'src/app/models/transaccion/transaccion';

@Injectable({
  providedIn: 'root'
})
export class TransaccionService {

  baseUrl: string = "http://localhost:3000/api/transaccion";
  constructor(private _http: HttpClient) {

  }

  public getTransacciones(): Observable<any> {
    return this._http.get(this.baseUrl);
  }

  public getTransPorOrigenDestino(origen: string, destino: string): Observable<any> {
    const params = {
      monedaOrigen: origen,
      monedaDestino: destino
    };
    return this._http.get('http://localhost:3000/api/transaccion/busqueda', { params });
  }

  public crearTransaccion(transaccion: Transaccion): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const body = JSON.stringify(transaccion);
    return this._http.post(this.baseUrl, body, { headers: headers });
  }
}
