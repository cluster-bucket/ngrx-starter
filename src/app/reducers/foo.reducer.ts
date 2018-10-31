import { createFeatureSelector, createSelector } from '@ngrx/store';
import { FooActions, FooActionTypes } from '../actions/foo.actions';

export interface FooState {
  message: string;
}

export const initialState: FooState = {
  message: 'Hello, NgRx!',
};

export function reducer(state = initialState, action: FooActions): FooState {
  switch (action.type) {

    case FooActionTypes.LoadFoosDone:
      return { ...state, ...action.data };

    default:
      return state;
  }
}

const featureSelector = createFeatureSelector('foo');

export const getFooMessage = createSelector(
  featureSelector,
  (state: FooState) => state.message,
);
