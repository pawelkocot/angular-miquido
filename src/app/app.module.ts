import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TopicsComponent } from './topics/topics.component';
import { InputTestComponent } from './topics/input-test/input-test.component';
import { StreamComponent } from './stream/stream.component';
import { StreamService } from './stream/stream.service';
import { SubStreamComponent } from './stream/sub-stream/sub-stream.component';
import { LifecycleComponent } from './lifecycle/lifecycle.component';

@NgModule({
  declarations: [
    AppComponent,
    TopicsComponent,
    InputTestComponent,
    StreamComponent,
    SubStreamComponent,
    LifecycleComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [StreamService],
  bootstrap: [AppComponent]
})
export class AppModule { }
