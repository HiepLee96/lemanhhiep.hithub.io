import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'assignment2';
  userName: String = '';
  buttonStatus: boolean = true;

  clearTheUsername(){
    this.userName = '';
  }

  isUserNameEmpty(){
    if(this.userName.length > 0){
      return false;
    } else {
      return true;
    }
  }
}
