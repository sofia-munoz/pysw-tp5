import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DivisaService {

  constructor(private _http: HttpClient) { }

  public convertirDivisa(value: number, fromType: string, toType: string): Observable<any> {

    const httpOptions = {
      headers: new HttpHeaders({
        'apikey': 'JzdHaoSGW9ZVwilos3w0KYc6IwTEni1I'
      })
    };
    const body = new HttpParams()
      .set('to', toType)
      .set('from', fromType)
      .set('amount', value.toString())

    return this._http.get("https://api.apilayer.com/fixer/convert?to=" + toType + "&from=" + fromType + "&amount=" + value, httpOptions);
  }

  public obtenerSimbolos(): Observable<any> {

    const httpOptions = {
      headers: new HttpHeaders({
        'apikey': 'JzdHaoSGW9ZVwilos3w0KYc6IwTEni1I'
      })
    };
    return this._http.get("https://api.apilayer.com/fixer/symbols", httpOptions);
  }

}

