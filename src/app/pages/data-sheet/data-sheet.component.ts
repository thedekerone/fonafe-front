import { Component } from '@angular/core';
import { DataSheetTableComponent } from '../../components/data-sheet-table/data-sheet-table.component';
import { FeatureIconComponent } from '../../components/feature-icon/feature-icon.component';

@Component({
  selector: 'app-data-sheet',
  standalone: true,
  imports: [DataSheetTableComponent, FeatureIconComponent],
  templateUrl: './data-sheet.component.html',
  styleUrl: './data-sheet.component.css'
})
export class DataSheetComponent {

}
