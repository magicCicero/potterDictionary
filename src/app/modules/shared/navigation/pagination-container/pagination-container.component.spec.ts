import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginationContainerComponent } from './pagination-container.component';

describe('PaginationContainerComponent', () => {
  let component: PaginationContainerComponent;
  let fixture: ComponentFixture<PaginationContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaginationContainerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PaginationContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
