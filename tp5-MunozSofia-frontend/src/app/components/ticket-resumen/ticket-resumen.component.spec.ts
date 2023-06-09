import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketResumenComponent } from './ticket-resumen.component';

describe('TicketResumenComponent', () => {
  let component: TicketResumenComponent;
  let fixture: ComponentFixture<TicketResumenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TicketResumenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TicketResumenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
