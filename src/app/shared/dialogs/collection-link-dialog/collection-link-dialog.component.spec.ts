import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectionLinkDialogComponent } from './collection-link-dialog.component';

describe('CollectionLinkDialogComponent', () => {
  let component: CollectionLinkDialogComponent;
  let fixture: ComponentFixture<CollectionLinkDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollectionLinkDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollectionLinkDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
