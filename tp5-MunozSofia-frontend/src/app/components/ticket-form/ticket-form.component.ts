import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { error } from 'console';
import { Espectador } from 'src/app/models/espectador/espectador';
import { Ticket } from 'src/app/models/ticket/ticket';
import { EspectadorService } from 'src/app/services/espectador/espectador.service';
import { TicketService } from 'src/app/services/ticket/ticket.service';

@Component({
  selector: 'app-ticket-form',
  templateUrl: './ticket-form.component.html',
  styleUrls: ['./ticket-form.component.css']
})
export class TicketFormComponent implements OnInit {

  ticket: Ticket = new Ticket;
  action: String = "new";
  espectadores: Array<Espectador> = new Array<Espectador>();
  constructor(private ticketService: TicketService, private router: Router, 
              private activatedRoute: ActivatedRoute, private espectadorService: EspectadorService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params =>{
      if(params['id']==0){
        this.action = "new";
      }else{
        this.action = "update";
        this.cargarTicket(params['id']);
      }
    });
    this.cargarEspectadores();
  }

  public guardarTicket(){
    this.ticketService.crearTicket(this.ticket).subscribe(
      result => {
        console.log(result);
        this.router.navigate(["tickets"]);
      },
      error => {
        console.log(error);
      }
    );
  }

  cargarTicket(id: string){
    this.ticketService.getTicket(id).subscribe(
      result => {
        this.ticket = result;
        this.ticket.espectador = this.espectadores.find(item => (item._id == this.ticket.espectador._id))!;
      },
      error => {
        console.log(error);
      }
    );
  }

  volverLista(){
    this.router.navigate(["tickets"]);
  }

  modificarTicket() {
    this.ticketService.modificarTicket(this.ticket).subscribe(
      result => {
        alert("Ticket modificado");
        this.router.navigate(["tickets"]);
      },
      error => {
        console.log(error);
      }
    );
  }
  
  cargarEspectadores(){
    this.espectadorService.getEspectadores().subscribe(
      result => {
        this.espectadores = result;
      },
      error => {
        console.log(error);
      }
    );
  }

}
