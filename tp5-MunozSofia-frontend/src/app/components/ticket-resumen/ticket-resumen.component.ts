import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Ticket } from 'src/app/models/ticket/ticket';
import { TicketService } from 'src/app/services/ticket/ticket.service';

@Component({
  selector: 'app-ticket-resumen',
  templateUrl: './ticket-resumen.component.html',
  styleUrls: ['./ticket-resumen.component.css']
})
export class TicketResumenComponent implements OnInit {

  opcionSeleccionada!:string;
  tickets!:Array<Ticket>;
  constructor(private ticketService: TicketService, private router: Router) { 
    this.tickets = new Array<Ticket>();
  }

  ngOnInit(): void {
  }

  volverLista(){
    this.router.navigate(["tickets"]);
  }
  tieneExtranjeros(): boolean {
    return this.tickets.some(t => t.categoriaEspectador === 'e');
  }
  tieneLocales(): boolean {
    return this.tickets.some(t => t.categoriaEspectador === 'l');
  }
  buscarTickets(tipo: string){
    if(tipo=='l')
      this.opcionSeleccionada = "Local"
    else
      this.opcionSeleccionada = "Extranjero"

    this.tickets = new Array<Ticket>();
    this.ticketService.getTicketsPorTipo(tipo).subscribe(
      result =>{
        this.tickets = result;
        console.log(this.tickets)
      },
      error =>{
        console.log(error)
      }
    );
  }

}
