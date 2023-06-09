import { Component, OnInit } from '@angular/core';
import { Transaccion } from 'src/app/models/transaccion/transaccion';
import { DivisaService } from 'src/app/services/divisa/divisa.service';
import { TransaccionService } from 'src/app/services/transaccion/transaccion.service';

@Component({
  selector: 'app-transaccion',
  templateUrl: './transaccion.component.html',
  styleUrls: ['./transaccion.component.css']
})
export class TransaccionComponent implements OnInit {

  desdeDivisa!: string;
  aDivisa!: string;
  opcionesDivisas!: Array<any>;
  transacciones: Array<Transaccion>  = new Array<Transaccion>();
  transFiltradas: Array<Transaccion>  = new Array<Transaccion>();

  constructor(private transaccionService: TransaccionService,
              private divisaService: DivisaService) { }

  ngOnInit(): void {
    this.getTotalTransacciones();
    this.cargarDivisas();
  }
  getTotalTransacciones(){
    this.transaccionService.getTransacciones().subscribe(
      result=>{
        this.transacciones = result;
      },
      error=>{
        console.log(error);
      }
    );
  };
  cargarDivisas() {
    this.divisaService.obtenerSimbolos().subscribe(
      result => {
        this.opcionesDivisas = Object.entries(result.symbols);
      },
      error => {
        console.log(error);
      }
    );
  }
  buscarPorFiltros(){
    this.transaccionService.getTransPorOrigenDestino(this.desdeDivisa, this.aDivisa).subscribe(
      result =>{
        this.transFiltradas = result;
        console.log(this.transFiltradas);
      },
      error =>{
        console.log(error);
      }
    );
  }

}
