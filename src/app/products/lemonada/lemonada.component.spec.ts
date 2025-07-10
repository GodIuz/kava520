import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LemonadaComponent } from './lemonada.component';

describe('LemonadaComponent', () => {
  let component: LemonadaComponent;
  let fixture: ComponentFixture<LemonadaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LemonadaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LemonadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
