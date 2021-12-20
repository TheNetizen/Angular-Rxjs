import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiveSearchBarComponent } from './live-search-bar.component';

describe('LiveSearchBarComponent', () => {
  let component: LiveSearchBarComponent;
  let fixture: ComponentFixture<LiveSearchBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LiveSearchBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LiveSearchBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
