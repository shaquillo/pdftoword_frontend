import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PdftronComponent } from './pdftron.component';

describe('PdftronComponent', () => {
  let component: PdftronComponent;
  let fixture: ComponentFixture<PdftronComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PdftronComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PdftronComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
