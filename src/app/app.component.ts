import { Component, OnInit } from '@angular/core';
import { Usuario } from "app/usuario";
import { UsuariosService } from "app/usuarios.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  usuarios: Usuario[];

  constructor(
    private servico: UsuariosService
  ){
    
  }

  ngOnInit(): void {
      this.usuarios = this.servico.getUsuarios();
  }
}
