import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateMaintenancePageComponent } from './create-maintenance-page.component';

describe('CreateMaintenancePageComponent', () => {
  let component: CreateMaintenancePageComponent;
  let fixture: ComponentFixture<CreateMaintenancePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateMaintenancePageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateMaintenancePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
