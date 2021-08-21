import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PdfFileEditorComponent } from './pdf-file-editor.component';

describe('PdfFileEditorComponent', () => {
  let component: PdfFileEditorComponent;
  let fixture: ComponentFixture<PdfFileEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PdfFileEditorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PdfFileEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
