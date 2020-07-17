import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  users : any [] = []
  title = 'Oscar Alejandro'
  valor : any [] = []
  constructor(protected userService : UserService) { }

  ngOnInit(): void {
    this.userService.getUser().subscribe(
      (data) => {
        console.log(data)
        this.valor = data ['info']
        this.users = data['results']
        console.log(this.valor)
      },
      (error) =>{
        console.error(error)
      }
    )
  }
}
