import { compose } from '@ngrx/core';
import { combineReducers } from '@ngrx/store';
import { IMessagingState, MESSAGING_INITIAL_STATE, messagingReducer } from './messaging/store';
import { ITaskingState, TASKING_INITIAL_STATE, taskingReducer } from './tasking/store';

export interface IAppState {
    tasking: ITaskingState;
    messaging: IMessagingState;
}

export const INITIAL_STATE: IAppState = {
    tasking: TASKING_INITIAL_STATE,
    messaging: MESSAGING_INITIAL_STATE
};

export function rootReducer() {
    return compose(combineReducers)({
        tasking: taskingReducer,
        messaging: messagingReducer
    });
}
