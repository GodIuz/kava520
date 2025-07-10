import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GreenTeaLemoniComponent } from './green-tea-lemoni.component';

describe('GreenTeaLemoniComponent', () => {
  let component: GreenTeaLemoniComponent;
  let fixture: ComponentFixture<GreenTeaLemoniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GreenTeaLemoniComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GreenTeaLemoniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
