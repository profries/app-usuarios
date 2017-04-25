import { Injectable } from '@angular/core';
import { Usuario } from "app/usuario";

@Injectable()
export class UsuariosService {
  usuarios: Usuario[] = [
    {nome:"Fulano",
    email:"fulano@mail.com",
    username:"fulano"},
    {nome:"Sicrano",
    email:"sicrano@mail.com",
    username:"sicrano"},
    {nome:"Beltrano",
    email:"beltrano@mail.com",
    username:"beltrano"},
  ];
  
  constructor() { 
    let usuario = new Usuario();
    usuario.nome="XYZ";
    usuario.email="xyz@mail.com";
    usuario.username="xyz";
    this.usuarios.push(usuario);
  }

  getUsuarios(){
    return this.usuarios;
  }


}
