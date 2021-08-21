import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SyncfusionMoreComponent } from './syncfusion-more.component';

describe('SyncfusionMoreComponent', () => {
  let component: SyncfusionMoreComponent;
  let fixture: ComponentFixture<SyncfusionMoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SyncfusionMoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SyncfusionMoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
