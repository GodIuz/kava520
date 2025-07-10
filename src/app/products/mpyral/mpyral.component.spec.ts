import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MpyralComponent } from './mpyral.component';

describe('MpyralComponent', () => {
  let component: MpyralComponent;
  let fixture: ComponentFixture<MpyralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MpyralComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MpyralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
