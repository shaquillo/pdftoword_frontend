import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Pdf2htmlEXComponent } from './pdf2html-ex.component';

describe('Pdf2htmlEXComponent', () => {
  let component: Pdf2htmlEXComponent;
  let fixture: ComponentFixture<Pdf2htmlEXComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Pdf2htmlEXComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Pdf2htmlEXComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
