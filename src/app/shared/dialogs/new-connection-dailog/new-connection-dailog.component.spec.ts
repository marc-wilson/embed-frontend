import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewConnectionDailogComponent } from './new-connection-dailog.component';

describe('NewConnectionDailogComponent', () => {
  let component: NewConnectionDailogComponent;
  let fixture: ComponentFixture<NewConnectionDailogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewConnectionDailogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewConnectionDailogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
