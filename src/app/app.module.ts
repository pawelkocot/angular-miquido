import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TopicsComponent } from './topics/topics.component';
import { InputTestComponent } from './topics/input-test/input-test.component';

@NgModule({
  declarations: [
    AppComponent,
    TopicsComponent,
    InputTestComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
