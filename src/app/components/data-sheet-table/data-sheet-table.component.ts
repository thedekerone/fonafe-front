import { Component, Input } from '@angular/core';
interface Indicator {
  name: string;
  formula: string;
  unit: string;
}

@Component({
  selector: 'app-data-sheet-table',
  standalone: true,
  imports: [],
  templateUrl: './data-sheet-table.component.html',
  styleUrl: './data-sheet-table.component.css',
})
export class DataSheetTableComponent {
  @Input() title:string = ""
  @Input() indicators: Indicator[] = [
  { name: 'Liquidez', formula: 'Activo Corriente/Pasivo Corriente', unit: 'Ratio (solo número)' },
  { name: 'Solvencia', formula: '(Total activo/pasivo total)', unit: 'Ratio (solo número)' },
  { name: 'ROA', formula: '(Utilidad Neta/Total Activos)*100', unit: 'Porcentaje' },
  { name: 'ROE', formula: '(Utilidad Neta/Patrimonio Neto)*100', unit: 'Porcentaje' },
  { name: 'Margen Neto', formula: '(Utilidad Neta/Ventas)*100', unit: 'Porcentaje' },
  { name: 'Endeudamiento', formula: 'Pasivo Total/Patrimonio', unit: 'Ratio (solo número)' },
  { name: 'Ingresos', formula: 'Ficha Empresarial', unit: 'MM $/' },
  { name: 'Patrimonio Neto', formula: 'Ficha Empresarial', unit: 'MM $/' },
  { name: 'Activos', formula: 'Ficha Empresarial', unit: 'MM $/' },
  { name: 'EBITDA', formula: 'Ficha Empresarial', unit: 'MM $/' },
  { name: 'Capital de Trabajo', formula: 'Ficha Empresarial', unit: 'MM $/' }
];
}
