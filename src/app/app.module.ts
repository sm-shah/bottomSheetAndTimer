import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';
import { BottomSheetComponent } from './bottom-sheet/bottom-sheet.component';
import { CardComponent } from './card/card.component';
import { CountDownTimerModule } from './countdown-timer/countdown-timer.module';

@NgModule({
  declarations: [
    AppComponent,
    BottomSheetComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CountDownTimerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
