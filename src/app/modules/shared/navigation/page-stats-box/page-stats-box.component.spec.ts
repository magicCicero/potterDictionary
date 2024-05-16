import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageStatsBoxComponent } from './page-stats-box.component';

describe('PageStatsBoxComponent', () => {
  let component: PageStatsBoxComponent;
  let fixture: ComponentFixture<PageStatsBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageStatsBoxComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PageStatsBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
