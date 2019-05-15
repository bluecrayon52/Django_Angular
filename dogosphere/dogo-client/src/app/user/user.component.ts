import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { DogService } from './../dog.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  providers: [DogService]
})
export class UserComponent implements OnInit {
  private _user;
  dogs = [];
  constructor(private dogs_api: DogService) { 
  }

  ngOnInit() {
  }
  
  @Input() 
  set user(user: object) {
    this._user = user;
    this.getDogs(this._user.dogs);
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
  
  getDogs(dogs) {
    for (let id of dogs) {
      console.log('dogID: ', id);
      this.dogs_api.getOneDog(id).subscribe(
        data => {
          this.dogs.push(data);
        },
        error => {
          console.log(error);
        }
      )
    }
  }
}
