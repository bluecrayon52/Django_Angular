import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dog-detail',
  templateUrl: './dog-detail.component.html',
  styleUrls: ['./dog-detail.component.css']
})
export class DogDetailComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() dog;

}
