import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrangeJuiceComponent } from './orange-juice.component';

describe('OrangeJuiceComponent', () => {
  let component: OrangeJuiceComponent;
  let fixture: ComponentFixture<OrangeJuiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrangeJuiceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrangeJuiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
