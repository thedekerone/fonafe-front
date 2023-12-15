import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NonFinancialCompaniesComponent } from './non-financial-companies.component';

describe('NonFinancialCompaniesComponent', () => {
  let component: NonFinancialCompaniesComponent;
  let fixture: ComponentFixture<NonFinancialCompaniesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NonFinancialCompaniesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NonFinancialCompaniesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
