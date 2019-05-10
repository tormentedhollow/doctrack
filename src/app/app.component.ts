import { Component } from '@angular/core';
import { PingService } from 'kinvey-angular-sdk';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private pingService: PingService) {
    this.verify();
  }

  async verify() {
    try {
      const response = await this.pingService.ping();
      console.log(`Kinvey Ping Success. Kinvey Service is alive, version: ${response.version}, response: ${response.kinvey}`);
    } catch (error) {
      console.log(`Kinvey Ping Failed. Response: ${error.description}`);
    }
  }

}
