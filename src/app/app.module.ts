import { taskingReducer } from './tasking/store';
import { messagingReducer } from './messaging/store';
import { rootReducer } from './store';
import { MessagingModule } from './messaging/messaging.module';
import { TaskingModule } from './tasking/tasking.module';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { counterReducer } from './counter';
import { StoreModule } from '@ngrx/store';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    TaskingModule,
    MessagingModule,
    StoreModule.provideStore({
      messaging: messagingReducer,
      tasking: taskingReducer
      })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
