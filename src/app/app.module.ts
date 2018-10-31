import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule, routerReducer } from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';

import { AppEffects } from './effects/app.effects';
import { FooEffects } from './effects/foo.effects';

import { reducers } from './reducers';
import * as fromFoo from './reducers/foo.reducer';

import { AppComponent } from './containers/app/app.component';
import { FooComponent } from './containers/foo/foo.component';
import { FooBoxComponent } from './components/foo-box/foo-box.component';

@NgModule({
  bootstrap: [AppComponent],
  declarations: [AppComponent, FooBoxComponent, FooComponent],
  imports: [
    BrowserModule,
    EffectsModule.forRoot([AppEffects, FooEffects]),
    StoreModule.forRoot({ ...reducers, router: routerReducer }),
    RouterModule.forRoot([
      { path: 'foo', component: FooComponent },
      { path: '', redirectTo: '/foo', pathMatch: 'full' },
    ]),
    StoreRouterConnectingModule.forRoot(),
    StoreModule.forFeature('foo', fromFoo.reducer),
    EffectsModule.forFeature([FooEffects]),
  ],
  providers: [],
})
export class AppModule {}
