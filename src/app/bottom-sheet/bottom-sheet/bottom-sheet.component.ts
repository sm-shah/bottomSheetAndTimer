import { Component, OnInit } from '@angular/core';
import {animate, keyframes, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-bottom-sheet',
  templateUrl: './bottom-sheet.component.html',
  styleUrls: ['./bottom-sheet.component.css'],
  animations: [
    trigger('bottomSheetState', [state('default', style({
    })),
      state('open', 
      style({
        bottom: 'initial',
        top: '49%'
      })),
      transition('default <=> open', animate(300)
      )
    ])
  ]
})
export class BottomSheetComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }

  state = 'default';

  changeState() {
    this.state === 'default' ? this.state = 'open' : this.state = 'default';
  }

}
