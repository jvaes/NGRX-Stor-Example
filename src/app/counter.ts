import { tassign } from 'tassign';
import { stagger } from '@angular/animations';
import { Action } from '@ngrx/store';

export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const RESET = 'RESET';

export interface AppState {
    counter: number;
}

const initialState: AppState = {
    counter: 0
};



export function counterReducer(state: AppState = initialState, action: Action) {
    switch (action.type) {
        case INCREMENT:
            return tassign(state, { counter: state.counter + 1 });
        case DECREMENT:
            return tassign(state, { counter: state.counter - 1 });
        case RESET:
            return tassign(state, { counter: 0 });
        default:
            return state;
    }
}
