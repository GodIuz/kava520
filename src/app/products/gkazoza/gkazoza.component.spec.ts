import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GkazozaComponent } from './gkazoza.component';

describe('GkazozaComponent', () => {
  let component: GkazozaComponent;
  let fixture: ComponentFixture<GkazozaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GkazozaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GkazozaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
