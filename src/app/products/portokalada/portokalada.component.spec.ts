import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortokaladaComponent } from './portokalada.component';

describe('PortokaladaComponent', () => {
  let component: PortokaladaComponent;
  let fixture: ComponentFixture<PortokaladaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PortokaladaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PortokaladaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
