import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { UserService } from './../user.service';

@Component({
  selector: 'app-dog',
  templateUrl: './dog.component.html',
  styleUrls: ['./dog.component.css'],
  providers: [UserService]
})
export class DogComponent implements OnInit {
  private _dog;
  owners = [];
  constructor(private user_api: UserService) { 
  }

  ngOnInit() {
  }
  @Input() 
  set dog(dog: object) {
    this._dog = dog;
    this.getOwners(this._dog.owners);
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
  
  getOwners(owners) {
    for (let id of owners) {
      console.log('ownerID: ', id);
      this.user_api.getOneUser(id).subscribe(
        data => {
          this.owners.push(data);
        },
        error => {
          console.log(error);
        }
      )
    }
  }
}
