import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooBoxComponent } from './foo-box.component';

describe('FooBoxComponent', () => {
  let component: FooBoxComponent;
  let fixture: ComponentFixture<FooBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
