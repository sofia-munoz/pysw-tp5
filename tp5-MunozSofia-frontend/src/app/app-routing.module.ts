import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProductosComponent } from './components/productos/productos.component';
import { ProductosFormComponent } from './components/productos-form/productos-form.component';
import { DivisaComponent } from './components/divisa/divisa.component';
import { TransaccionComponent } from './components/transaccion/transaccion.component';
import { TicketComponent } from './components/ticket/ticket.component';
import { TicketResumenComponent } from './components/ticket-resumen/ticket-resumen.component';
import { TicketFormComponent } from './components/ticket-form/ticket-form.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'productos', component: ProductosComponent},
  {path: 'productos-form', component: ProductosFormComponent},
  {path: 'divisas', component: DivisaComponent},
  {path: 'transacciones', component: TransaccionComponent},
  {path: 'tickets', component: TicketComponent},
  {path: 'tickets-resumen', component: TicketResumenComponent},
  {path: 'tickets-form/:id', component: TicketFormComponent},
  {path: '**', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
