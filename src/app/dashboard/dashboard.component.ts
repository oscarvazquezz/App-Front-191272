import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  users : any [] = []
  title = 'Oscar Alejandro'
  
  constructor(protected userService : UserService) { }

  ngOnInit(): void {
    this.userService.getUserDasboard().subscribe(
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
