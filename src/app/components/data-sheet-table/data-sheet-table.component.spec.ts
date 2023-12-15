import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataSheetTableComponent } from './data-sheet-table.component';

describe('DataSheetTableComponent', () => {
  let component: DataSheetTableComponent;
  let fixture: ComponentFixture<DataSheetTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DataSheetTableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DataSheetTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
