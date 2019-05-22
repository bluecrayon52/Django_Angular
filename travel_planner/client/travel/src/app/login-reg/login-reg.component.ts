import { Component, OnInit } from '@angular/core';
import { LoginRegService } from './../login-reg.service';
@Component({
  selector: 'app-login-reg',
  templateUrl: './login-reg.component.html',
  styleUrls: ['./login-reg.component.css']
})
export class LoginRegComponent implements OnInit {
  reg_obj; 
  login_obj;
  constructor(private loginregservice: LoginRegService) { }

  ngOnInit() {
    this.reg_obj = {
      first_name:'',
      last_name:'',
      birthday:'',
      email: '',
      password:'',
      confirm_password:''
    };
    this.login_obj = {
      email: '',
      password:''
    }
  }

  onRegister() {
    this.loginregservice.registerUser(this.reg_obj).subscribe(
      resp => {
        alert(`User ${resp.first_name} ${resp.last_name} has been registered!`);
      },
      error => {
        console.log(error);
      }
    );
  }

  onLogin() {
    this.loginregservice.loginUser(this.login_obj).subscribe(
      resp => {
        alert(`User ${resp.first_name} ${resp.last_name} has been logged in!`);
      },
      error => {
        console.log(error);
      }
    );
  }

}
