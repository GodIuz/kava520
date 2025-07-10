import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IceTeaLemoniComponent } from './ice-tea-lemoni.component';

describe('IceTeaLemoniComponent', () => {
  let component: IceTeaLemoniComponent;
  let fixture: ComponentFixture<IceTeaLemoniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IceTeaLemoniComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IceTeaLemoniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
