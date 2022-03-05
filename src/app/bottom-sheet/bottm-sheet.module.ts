import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { BottomSheetComponent } from './bottom-sheet/bottom-sheet.component';



@NgModule({
  declarations: [
    CardComponent,
    BottomSheetComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    CardComponent,
    BottomSheetComponent
  ]
})
export class BottomSheetModule { }
