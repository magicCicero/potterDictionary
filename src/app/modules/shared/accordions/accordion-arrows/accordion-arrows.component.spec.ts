import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccordionArrowsComponent } from './accordion-arrows.component';

describe('AccordionArrowsComponent', () => {
  let component: AccordionArrowsComponent;
  let fixture: ComponentFixture<AccordionArrowsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccordionArrowsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AccordionArrowsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
