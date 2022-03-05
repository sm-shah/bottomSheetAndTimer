import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';
import { BottomSheetModule } from './bottom-sheet/bottm-sheet.module';
import { BottomSheetComponent } from './bottom-sheet/bottom-sheet/bottom-sheet.component';
import { CardComponent } from './bottom-sheet/card/card.component';
import { CountDownTimerModule } from './countdown-timer/countdown-timer.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CountDownTimerModule,
    BottomSheetModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
