import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IceTeaRodakinoComponent } from './ice-tea-rodakino.component';

describe('IceTeaRodakinoComponent', () => {
  let component: IceTeaRodakinoComponent;
  let fixture: ComponentFixture<IceTeaRodakinoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IceTeaRodakinoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IceTeaRodakinoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
