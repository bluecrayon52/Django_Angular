import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { DogComponent } from './dog/dog.component';
import { UserComponent } from './user/user.component';
import { UsersComponent } from './users/users.component';
import { DogsComponent } from './dogs/dogs.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { DogDetailComponent } from './dog-detail/dog-detail.component';
import { UserSummaryComponent } from './user-summary/user-summary.component';
import { DogSummaryComponent } from './dog-summary/dog-summary.component';

@NgModule({
  declarations: [
    AppComponent,
    DogComponent,
    UserComponent,
    UsersComponent,
    DogsComponent,
    UserDetailComponent,
    DogDetailComponent,
    UserSummaryComponent,
    DogSummaryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
