import { ActionReducerMap } from '@ngrx/store';

import * as fromFoo from './foo.reducer';

export interface State {
  foo: fromFoo.FooState;
}

export const reducers: ActionReducerMap<State> = {
  foo: fromFoo.reducer,
};
