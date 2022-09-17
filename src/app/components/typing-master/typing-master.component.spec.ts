import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypingMasterComponent } from './typing-master.component';

describe('TypingMasterComponent', () => {
  let component: TypingMasterComponent;
  let fixture: ComponentFixture<TypingMasterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypingMasterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TypingMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
