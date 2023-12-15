import { Component } from '@angular/core';
import { DataSheetTableComponent } from '../../components/data-sheet-table/data-sheet-table.component';

@Component({
  selector: 'app-non-financial-companies',
  standalone: true,
  imports: [DataSheetTableComponent],
  templateUrl: './non-financial-companies.component.html',
  styleUrl: './non-financial-companies.component.css',
})
export class NonFinancialCompaniesComponent {
  indicadores: { name: string; formula: string; unit: string }[] = [
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
    { name: 'Capital de Trabajo', formula: 'Ficha Empresarial', unit: 'MM $/' },
  ];
}
