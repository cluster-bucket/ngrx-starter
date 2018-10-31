import { Action } from '@ngrx/store';

import { Foo } from '../interfaces/foo.iface';

export enum FooActionTypes {
  LoadFoos = '[Foo] Load Foos',
  LoadFoosDone = '[Foo] Load Foos Done',
}

export class LoadFoos implements Action {
  readonly type = FooActionTypes.LoadFoos;
}

export class LoadFoosDone implements Action {
  readonly type = FooActionTypes.LoadFoosDone;

  constructor(public data: Foo) {}
}

export type FooActions = LoadFoos | LoadFoosDone;
