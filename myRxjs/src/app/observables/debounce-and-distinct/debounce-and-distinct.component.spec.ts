import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DebounceAndDistinctComponent } from './debounce-and-distinct.component';

describe('DebounceAndDistinctComponent', () => {
  let component: DebounceAndDistinctComponent;
  let fixture: ComponentFixture<DebounceAndDistinctComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DebounceAndDistinctComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DebounceAndDistinctComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
