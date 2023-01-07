import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-servers',
  // selector: '.app-servers',
  // template: `<app-server></app-server><app-server></app-server>`
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server was created!';
  serverName = '';

  constructor(){
    // setTimeout(() => {
    //   this.allowNewServer = true;
    // }, 2000);
    if(this.serverName.length != 0) {
      this.allowNewServer = true;
    } else {
      this.allowNewServer = false;
    }
  }

  ngOnInit(): void {
    
  }

  onCreateServer(){
    this.serverName = '';
  }

  onUpdateServerName(event: any){
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
