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
  newMessages;

  constructor(private store: Store<IMessagingState>) {
    this.newMessages = store.select<IMessagingState>('messaging');
  }

  increment() {
    this.store.dispatch({ type: INCREMENT });
  }

  decrement() {
    this.store.dispatch({ type: DECREMENT });
  }
}
