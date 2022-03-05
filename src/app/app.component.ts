import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'coding-test';
  isBottomSheetDisplay = true;
  timeLimit = 3605;
  interval!: any;
  status: string= '';

  startTimer() {
    this.status = 'start';
  }

  pauseTimer() {
    this.status = 'pause';
  }
}
