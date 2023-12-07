import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LstempresasComponent } from './lstempresas.component';

describe('LstempresasComponent', () => {
  let component: LstempresasComponent;
  let fixture: ComponentFixture<LstempresasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LstempresasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LstempresasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
