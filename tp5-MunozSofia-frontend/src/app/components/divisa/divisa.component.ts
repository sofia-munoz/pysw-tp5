import { Component, OnInit } from '@angular/core';
import { Transaccion } from 'src/app/models/transaccion/transaccion';
import { DivisaService } from 'src/app/services/divisa/divisa.service';
import { TransaccionService } from 'src/app/services/transaccion/transaccion.service';

@Component({
  selector: 'app-divisa',
  templateUrl: './divisa.component.html',
  styleUrls: ['./divisa.component.css']
})
export class DivisaComponent implements OnInit {

  cantidad!: number;
  desdeDivisa!: string;
  aDivisa!: string;
  resultado!: string;
  opcionesDivisas!: Array<any>;
  email!:string;
  transaccion!: Transaccion;

  constructor(private divisaService: DivisaService, 
              private transaccionService: TransaccionService) {
  }

  ngOnInit(): void {
    this.cargarDivisas();
  }

  convertir() {
    this.divisaService.convertirDivisa(this.cantidad, this.desdeDivisa, this.aDivisa).subscribe(
      result => {
        this.resultado = result.result;
        this.transaccion = new Transaccion();
        this.transaccion.monedaOrigen = result.query.from;
        this.transaccion.cantidadOrigen = result.query.amount;
        this.transaccion.monedaDestino = result.query.to;
        this.transaccion.cantidadDestino = result.result;
        this.transaccion.tasaConversion = result.info.rate;
        this.transaccion.emailCliente = this.email;
        this.guardarTransaccion(this.transaccion);
      },
      error => {
        this.resultado = "Error en la conversión"
      }
    )
  }

  resetResultado() {
    this.resultado = '';
  }

  cargarDivisas() {
    this.divisaService.obtenerSimbolos().subscribe(
      result => {
        this.opcionesDivisas = Object.entries(result.symbols);
      },
      error => {
        this.resultado = "Error en la conversión";
      }
    );
  }

  guardarTransaccion(transaccion: Transaccion) {
    //TODO: limpiar campos del formulario
    this.transaccionService.crearTransaccion(transaccion).subscribe(
      result=>{
        alert("Transaccion guardada con exito");
      },
      error =>{
        alert("Error al guardar la transaccion");
      }
    );
  }
}

