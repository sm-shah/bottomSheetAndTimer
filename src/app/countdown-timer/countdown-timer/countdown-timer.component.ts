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
    let totalSeconds = this.timeLimit;
    this.calculateTime(totalSeconds);
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
        let remainingSeconds =  this.timeLimit--;
        this.calculateTime(remainingSeconds);
      } else {
        clearInterval(this.interval);
      }
    },1000)
  }

  calculateTime(totalSeconds:number){
    let hour = Math.floor(totalSeconds / 3600);
    totalSeconds %= 3600;
    let minute = Math.floor(totalSeconds / 60);
    let second = totalSeconds % 60;
    this.remainingTime = `${hour}H ${minute}M ${second}S`;
  }


  stopTimer() {
    clearInterval(this.interval);
  }
}
