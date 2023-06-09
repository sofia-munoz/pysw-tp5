import { newArray } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductoService } from 'src/app/services/producto/producto.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  productos: Array<any> = new Array<any>();
  prodDestacados: Array<any> = new Array<any>();
  constructor(private productoService: ProductoService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.cargarProdDestacados();
    this.cargarProductos();
  }

  cargarProdDestacados() {
    this.productoService.getProdDestacados().subscribe(
      result => {
        this.prodDestacados = result;
      },
      error => {
        console.log(error);
      }
    );
  }

  cargarProductos() {
    this.productoService.getProductos().subscribe(
      result => {
        this.productos = result;
      },
      error => {
        console.log(error);
      }
    );
  }

  irFormulario() {
    this.router.navigate(["productos-form"]);
  }

}
