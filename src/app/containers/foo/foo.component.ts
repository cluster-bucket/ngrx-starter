import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import { LoadFoos } from '../../actions/foo.actions';
import * as fromFoo from '../../reducers/foo.reducer';

@Component({
  selector: 'app-foo',
  templateUrl: './foo.component.html',
  styleUrls: ['./foo.component.css']
})
export class FooComponent implements OnInit {
  message$: Observable<string>;

  constructor(private store: Store<fromFoo.FooState>) {
    this.message$ = store.pipe(select(fromFoo.getFooMessage)) as Observable<
      string
    >;

    // TODO: use an effect to dispatch this (or something else)
    store.dispatch(new LoadFoos());
  }

  ngOnInit() {
  }

}
