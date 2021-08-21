import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SejdaPdfComponent } from './sejda-pdf.component';

describe('SejdaPdfComponent', () => {
  let component: SejdaPdfComponent;
  let fixture: ComponentFixture<SejdaPdfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SejdaPdfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SejdaPdfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
