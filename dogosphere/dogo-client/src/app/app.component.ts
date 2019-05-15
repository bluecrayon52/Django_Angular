import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  page = 0;
  obj = {};

  onNavClick(pageTo: number) {
    this.page = pageTo;
  }

  setObj(obj: object) {
    this.obj = obj; 
  }
}
