import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModelClienteComponent } from '../model-cliente/model-cliente.component';
import { ModelProductoComponent } from '../model-producto/model-producto.component';
import { Cliente } from 'src/app/models/cliente.model';
import { Producto } from 'src/app/models/producto.model';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Boleta } from 'src/app/models/boleta.model';
import { BoletaService } from 'src/app/services/boleta.service';
import { Usuario } from 'src/app/models/usuario.model';
import { BoletaHasProducto } from 'src/app/models/boletaHasProducto.model';
import Swal from 'sweetalert2';
import { BoletaHasProductoPK } from 'src/app/models/boletaHasProductoPK.model';
import { TokenService } from 'src/app/security/token.service';

@Component({
  selector: 'app-boleta',
  templateUrl: './boleta.component.html',
  styleUrls: ['./boleta.component.css']
})
export class BoletaComponent {

  objCliente : Cliente = {};
  objProducto : Producto = {};
  dataSource:any;
  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  displayedColumns = ["idProducto","nombre","precio","cantidad",'actions'];

  lstProductos : Producto [] = [];
  objUsuario: Usuario = {} ;

  constructor(private dialogService: MatDialog, 
              private boletaService: BoletaService,
              private tokenService: TokenService) {
              this.objUsuario.idUsuario = tokenService.getUserId();
  }

  
  ngOnInit(): void {}

  buscaCliente(){
   
  }

  cargaCliente(){
    
  }

  buscaProducto(){
   
  }

  cargaProducto(){
    
  }

  agregarProducto(){
   
  }

  eliminaProducto(objProducto: Producto){
   
  }
  registrarBoleta(){
     
  }
  
}
