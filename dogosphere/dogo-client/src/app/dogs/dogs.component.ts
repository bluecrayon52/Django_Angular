import { Component, OnInit, EventEmitter, Input, Output} from '@angular/core';
import { DogService } from './../dog.service';
@Component({
  selector: 'app-dogs',
  templateUrl: './dogs.component.html',
  styleUrls: ['./dogs.component.css'],
  providers: [DogService]
})
export class DogsComponent implements OnInit {
  dogs = [{ name: "name", breed: "breed", bday: "birth day", desc: "description" }];
  constructor(private dogs_api: DogService) { 
    this.getDogs();
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

  getDogs = () => {
    this.dogs_api.getAllDogs().subscribe(
      data => {
        this.dogs = data;
      },
      error => {
        console.log(error);
      }
    )
  };
}
