import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CiaoComponent } from './ciao/ciao.component';
import { TitleComponent } from './title/title.component';
import { LikeComponent } from './like/like.component';
@NgModule({
  declarations: [
    AppComponent,
    CiaoComponent,
    TitleComponent,
    LikeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
