import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-countdown-timer',
  templateUrl: './countdown-timer.component.html',
  styleUrls: ['./countdown-timer.component.css']
})
export class CountdownTimerComponent implements OnInit ,OnChanges{

  @Input()
  status!: string;
  @Input()
  timeLimit!: number;
  
  interval!: any;
  remainingTime: string = '';

  ngOnInit(){
    let hour =  Math.floor(this.timeLimit / 3600);
    let minute = Math.floor(this.timeLimit / 60);
    let second = this.timeLimit % 60;
    this.remainingTime = `${hour}H ${minute}M ${second}S`

  }

  ngOnChanges(){
    if(this.status === 'start'){
      this.startTimer();
    }else{
      this.stopTimer();
    }
  }
  startTimer() {
    this.interval = setInterval(() => {
      if(this.timeLimit > 0) {
        this.timeLimit--;
        let hour =  Math.floor(this.timeLimit / 3600);
        let minute = Math.floor(this.timeLimit / 60);
        let second = this.timeLimit % 60;

        this.remainingTime = `${hour}H ${minute}M ${second}S`
      } else {
        clearInterval(this.interval);
      }
    },1000)
  }

  stopTimer() {
    clearInterval(this.interval);
  }
}
