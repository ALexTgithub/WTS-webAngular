import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SerchrandomfilmComponent } from './serchrandomfilm.component';

describe('SerchrandomfilmComponent', () => {
  let component: SerchrandomfilmComponent;
  let fixture: ComponentFixture<SerchrandomfilmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SerchrandomfilmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SerchrandomfilmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
