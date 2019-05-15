import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-user-summary',
  templateUrl: './user-summary.component.html',
  styleUrls: ['./user-summary.component.css']
})
export class UserSummaryComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  
  @Input() user;
}
