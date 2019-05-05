import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviweComponent } from './previwe.component';

describe('PreviweComponent', () => {
  let component: PreviweComponent;
  let fixture: ComponentFixture<PreviweComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreviweComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreviweComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
