import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { concatMap } from 'rxjs/operators';

import { FooActionTypes, LoadFoosDone } from '../actions/foo.actions';

@Injectable()
export class FooEffects {
  @Effect()
  loadFoos$: Observable<Action> = this.actions$.pipe(
    ofType(FooActionTypes.LoadFoos),
    concatMap(action =>
      of(
        new LoadFoosDone({
          message: 'Hello, Foo!',
        }),
      ),
    ),
  );

  constructor(private actions$: Actions) {}
}
