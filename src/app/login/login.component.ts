import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  users : any [] = []
  title = 'Oscar Alejandro'

  constructor(protected userService : UserService) { }

  ngOnInit(): void {
    this.userService.getUserLogin().subscribe(
      (data) => {
        console.log(data)
         this.users = data['results']
      },
      (error) =>{
        console.error(error)
      }
    )
  }

}
