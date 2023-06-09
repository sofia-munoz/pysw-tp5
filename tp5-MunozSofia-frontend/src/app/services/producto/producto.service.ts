import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from '../../models/producto/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  baseUrl: string = "http://localhost:3000/api/producto";
  constructor(private _http: HttpClient) {

  }

  public getProdDestacados(): Observable<any> {
    return this._http.get(this.baseUrl + "/destacados");
  }

  public getProductos(): Observable<any> {
    return this._http.get(this.baseUrl);
  }

  public crearProducto(producto: Producto): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const body = JSON.stringify(producto);

    return this._http.post(this.baseUrl, body, { headers: headers });
  }

}
