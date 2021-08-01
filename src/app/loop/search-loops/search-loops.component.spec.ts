import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchLoopsComponent } from './search-loops.component';

describe('SearchLoopsComponent', () => {
  let component: SearchLoopsComponent;
  let fixture: ComponentFixture<SearchLoopsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchLoopsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchLoopsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
