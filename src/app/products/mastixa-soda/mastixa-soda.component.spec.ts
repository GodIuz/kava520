import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MastixaSodaComponent } from './mastixa-soda.component';

describe('MastixaSodaComponent', () => {
  let component: MastixaSodaComponent;
  let fixture: ComponentFixture<MastixaSodaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MastixaSodaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MastixaSodaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
