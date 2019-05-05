import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowfilmComponent } from './showfilm.component';

describe('ShowfilmComponent', () => {
  let component: ShowfilmComponent;
  let fixture: ComponentFixture<ShowfilmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowfilmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowfilmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
