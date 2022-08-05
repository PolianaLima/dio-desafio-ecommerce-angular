import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LrstoreAppComponent } from './lrstore-app.component';

describe('LrstoreAppComponent', () => {
  let component: LrstoreAppComponent;
  let fixture: ComponentFixture<LrstoreAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LrstoreAppComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LrstoreAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
