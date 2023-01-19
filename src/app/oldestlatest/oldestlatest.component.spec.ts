import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OldestlatestComponent } from './oldestlatest.component';

describe('OldestlatestComponent', () => {
  let component: OldestlatestComponent;
  let fixture: ComponentFixture<OldestlatestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OldestlatestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OldestlatestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
