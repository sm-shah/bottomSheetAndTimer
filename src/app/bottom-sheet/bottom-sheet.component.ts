import { Component, OnInit } from '@angular/core';
import {animate, keyframes, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-bottom-sheet',
  templateUrl: './bottom-sheet.component.html',
  styleUrls: ['./bottom-sheet.component.css'],
  animations: [
    trigger('tabState', [state('default', style({
      // left: '50%',
      // transform: 'translate(-50%)'
    })),
      state('open', 
      style({
        bottom: 'initial',
        top: '49%'
      })),
      transition('default <=> open', animate(500
        // keyframes([
        //   style({
        //     // top: '0',
        //     // left: '0',
        //     // width: '100%',
        //     // height: '100%',
        //     // background: 'rgba(0,0,0,0.5)'
        //   })
        // ])
        ))
    ])
  ]
})
export class BottomSheetComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }

  state = 'default';

  onComeIn() {
    this.state === 'default' ? this.state = 'open' : this.state = 'default';
  }

}
