import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DogSummaryComponent } from './dog-summary.component';

describe('DogSummaryComponent', () => {
  let component: DogSummaryComponent;
  let fixture: ComponentFixture<DogSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DogSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DogSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
