import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UserService]
})
export class AppComponent implements OnInit{
  register; 
  login;

  constructor(private userService: UserService){}
  ngOnInit() {
    this.register = {
      first_name:'',
      last_name:'',
      username:'',
      email: '',
      password:''
    };
    this.login = {
      username: '',
      password:''
    }
  }
  onRegister() {
    this.userService.registerUser(this.register).subscribe(
      resp => {
        alert(`User ${resp.username} has been created!`);
      },
      error => {
        console.log(error);
      }
    );
  }

  onLogin() {
    this.userService.loginUser(this.login).subscribe(
      resp => {
        console.log(resp);
      },
      error => {
        console.log(error);
      }
    );
  }
}
