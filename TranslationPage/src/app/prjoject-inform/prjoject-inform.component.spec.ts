import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrjojectInformComponent } from './prjoject-inform.component';

describe('PrjojectInformComponent', () => {
  let component: PrjojectInformComponent;
  let fixture: ComponentFixture<PrjojectInformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrjojectInformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrjojectInformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
