import { IMessagingState } from './store';
import { tassign } from 'tassign';
import { INCREMENT, DECREMENT } from './actions';

export interface IMessagingState {
    newMessages: number;
}


export const MESSAGING_INITIAL_STATE: IMessagingState = {
    newMessages: 0
  };

  function increment(state: IMessagingState, action) {
    return tassign(state, { newMessages: state.newMessages + 1 });
  }

  function decrement(state: IMessagingState, action) {
    if (state.newMessages === 0) {
      return state;
    }

    return tassign(state, { newMessages: state.newMessages - 1 });
  }

  export function messagingReducer(state: IMessagingState = MESSAGING_INITIAL_STATE, action): IMessagingState {
    switch (action.type) {
      case INCREMENT: return increment(state, action);
      case DECREMENT: return decrement(state, action);
    }

    return state;
  }
