import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Producto } from 'src/app/models/producto/producto';
import { ProductoService } from 'src/app/services/producto/producto.service';

@Component({
  selector: 'app-productos-form',
  templateUrl: './productos-form.component.html',
  styleUrls: ['./productos-form.component.css']
})
export class ProductosFormComponent implements OnInit {

  producto:Producto = new Producto();
  constructor(private productoService: ProductoService, 
              private router: Router, 
              private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
  }
  volverLista(){
    this.router.navigate(["productos"]);
  }
  agregarProducto(){
    if(this.producto.destacado!=true) 
      this.producto.destacado = false; 
    this.productoService.crearProducto(this.producto).subscribe(
      result=>{
        console.log(result);
        alert("Producto creado");
        this.router.navigate(["productos"]);
      },
      error=>{
        console.log(error);
      }
    );

  }
}
