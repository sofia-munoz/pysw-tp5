import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ticket } from 'src/app/models/ticket/ticket';

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  baseUrl: string = "http://localhost:3000/api/ticket";
  constructor(private _http: HttpClient) {
  }

  public getTickets(): Observable<any> {
    return this._http.get(this.baseUrl);
  }

  public getTicket(id:string): Observable<any> {
    return this._http.get(this.baseUrl + "/" + id);
  }

  public crearTicket(ticket: Ticket): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const body = JSON.stringify(ticket);
    console.log(ticket);
    return this._http.post(this.baseUrl, body, { headers: headers });
  }

  public modificarTicket(ticket: Ticket): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const body = JSON.stringify(ticket);
    console.log(ticket);
    return this._http.put(this.baseUrl + "/" + ticket._id, body, { headers: headers });
  }
  public eliminarTicket(id: string): Observable<any> {
    return this._http.delete(this.baseUrl + "/" + id);
  }
  public getTicketsPorTipo(tipo:string): Observable<any> {
    const params = {
      tipo: tipo
    };
    return this._http.get(this.baseUrl, {params});
  }
}
