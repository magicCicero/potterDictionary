import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginationJoinButtonsComponent } from './pagination-join-buttons.component';

describe('PaginationJoinButtonsComponent', () => {
  let component: PaginationJoinButtonsComponent;
  let fixture: ComponentFixture<PaginationJoinButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaginationJoinButtonsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PaginationJoinButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
