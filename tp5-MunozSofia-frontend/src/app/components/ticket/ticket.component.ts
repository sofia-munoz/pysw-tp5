import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Ticket } from 'src/app/models/ticket/ticket';
import { TicketService } from 'src/app/services/ticket/ticket.service';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent implements OnInit {

  public ticketAEliminar = new Ticket();
  tickets: Array<Ticket> = new Array<Ticket>();
  constructor(private ticketService: TicketService, private router: Router) { 
    this.listarTickets();
  }

  ngOnInit(): void {
  }

  public listarTickets(){
    return this.ticketService.getTickets().subscribe(
      result=>{
        this.tickets = result;
      },
      error=>{
        console.log(error)
      }
    );
  }

  agregarTicket(){
    this.router.navigate(["tickets-form",0]);
  }
  modificarTicket(ticket: Ticket){
    this.router.navigate(["tickets-form",ticket._id]);
  }
  eliminarTicket(id: string){
    this.ticketService.eliminarTicket(id).subscribe(
      result => {
         this.listarTickets();
      },
      error => {
        console.log(error);
      }
    );
  }
  irResumen(){
    this.router.navigate(["tickets-resumen"]);
  }

}
