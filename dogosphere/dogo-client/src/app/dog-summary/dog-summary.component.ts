import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dog-summary',
  templateUrl: './dog-summary.component.html',
  styleUrls: ['./dog-summary.component.css']
})
export class DogSummaryComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() dog;

}
