import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoopDetailsComponent } from './loop-details.component';

describe('LoopDetailsComponent', () => {
  let component: LoopDetailsComponent;
  let fixture: ComponentFixture<LoopDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoopDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoopDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
