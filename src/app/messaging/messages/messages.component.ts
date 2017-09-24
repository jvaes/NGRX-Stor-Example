import { DECREMENT, INCREMENT } from '../actions';
import { stagger } from '@angular/animations';
import { Store } from '@ngrx/store';
import { IMessagingState } from './../store';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent {
  newMessages: number;

  constructor(private store: Store<IMessagingState>) {
    const messagingStore = store.select<IMessagingState>('messaging');

    messagingStore.subscribe((state: IMessagingState) => {
      if (state) {
        this.newMessages = state.newMessages;
      }
    });
  }

  increment() {
    this.store.dispatch({ type: INCREMENT });
  }

  decrement() {
    this.store.dispatch({ type: DECREMENT });
  }
}
