import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  pageName= 'Users List';
  textColor = 'text-info';
  bgColor = 'bg-info';
  page = 0;
  obj = {};

  onNavClick(pageTo: number) {
    this.page = pageTo;
    if (this.page == 0) {
      this.pageName = 'Users List';
      this.textColor = 'text-info';
      this.bgColor = 'bg-info';
    } else if (this.page == 1) {
      this.pageName = 'Dogs List';
      this.textColor = 'text-warning';
      this.bgColor = 'bg-warning';
    } else if (this.page == 2) {
      this.pageName = 'User Detail';
      this.textColor = 'text-info';
      this.bgColor = 'bg-info';
    } else {
      this.pageName = 'Dog Detail';
      this.textColor = 'text-warning';
      this.bgColor = 'bg-warning';
    }
  }

  // set object to specify a dog or user for detail pages 
  setObj(obj: object) {
    this.obj = obj; 
  }
}
