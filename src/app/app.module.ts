import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WordInputComponent } from './word-input/word-input.component';

// If you're using Angular Material, import the necessary modules
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';

import { GameService } from './game.service';
import { BoardComponent } from './board/board.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { KeyboardComponent } from './keyboard/keyboard.component';
import { KeyRowComponent } from './key-row/key-row.component';
import { KeyComponent } from './key/key.component';

@NgModule({
  declarations: [
    AppComponent,
    WordInputComponent,
    BoardComponent,
    TopBarComponent,
    KeyboardComponent,
    KeyRowComponent,
    KeyComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule, // If using Angular Material
    MatButtonModule,         // If using Angular Material
    MatInputModule          // If using Angular Material
  ],
  providers: [GameService],
  bootstrap: [AppComponent]
})
export class AppModule { }
