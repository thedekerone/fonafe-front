import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinancialCompaniesComponent } from './financial-companies.component';

describe('FinancialCompaniesComponent', () => {
  let component: FinancialCompaniesComponent;
  let fixture: ComponentFixture<FinancialCompaniesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FinancialCompaniesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FinancialCompaniesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
