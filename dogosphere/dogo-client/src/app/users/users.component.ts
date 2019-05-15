import { Component, OnInit,  EventEmitter, Input, Output } from '@angular/core';
import { UserService } from './../user.service';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  providers: [UserService]
})
export class UsersComponent implements OnInit {
  users = [{first_name: "first name", last_name: "last name", username: "username", email: "email"}];
  constructor(private users_api: UserService) { 
    this.getUsers();
  }
  ngOnInit() {
  }
  @Output() navNum = new EventEmitter<number>();
  @Output() navObj = new EventEmitter<object>();

  navTo(page: number, obj: object) {
    if (obj){
      console.log('sending to details....');
      console.log(obj);
      this.navNum.emit(page);
      this.navObj.emit(obj);
    } else {
      console.log('sending to list....');
      this.navNum.emit(page);
    }
  }

  getUsers = () => {
    this.users_api.getAllUsers().subscribe(
      data => {
        this.users = data;
      },
      error => {
        console.log(error);
      }
    )
  };
}
