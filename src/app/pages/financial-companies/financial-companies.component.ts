import { Component } from '@angular/core';
import { DataSheetTableComponent } from '../../components/data-sheet-table/data-sheet-table.component';

@Component({
  selector: 'app-financial-companies',
  standalone: true,
  imports: [DataSheetTableComponent],
  templateUrl: './financial-companies.component.html',
  styleUrl: './financial-companies.component.css',
})
export class FinancialCompaniesComponent {
  indicadores: { name: string; formula: string; unit: string }[] = [
    { name: 'Liquidez', formula: '(Disponible/Total Activo)*100', unit: 'Porcentaje' },
    { name: 'Solvencia', formula: '(Pasivo Total/Total Activo)*100', unit: 'Porcentaje' },
    { name: 'ROA', formula: '(Utilidad Neta/Total Activos)*100', unit: 'Porcentaje' },
    { name: 'ROE', formula: '(Utilidad Neta/Patrimonio Neto)*100', unit: 'Porcentaje' },
    { name: 'Margen Neto', formula: 'Margen Neto', unit: 'Porcentaje' },
    { name: 'Endeudamiento', formula: '(Pasivo Total/Patrimonio)*100', unit: 'Porcentaje' },
    {
      name: 'Eficiencia',
      formula:
        '(Gastos de Administración + Depreciación + Amortización) / (Margen Financiero bruto + Ingresos por servicios financieros - Gastos por servicios financieros)*100',
      unit: 'Porcentaje',
    },
    { name: 'Ingresos por Intereses', formula: 'Ingresos x Intereses', unit: 'MM S/' },
    { name: 'Patrimonio Neto', formula: 'Ficha Empresarial', unit: 'MM S/' },
    { name: 'Activos', formula: 'Ficha Empresarial', unit: 'MM S/' },
    { name: 'EBITDA', formula: 'Ficha Empresarial', unit: 'MM S/' },
    { name: 'Disponible', formula: 'Ficha Empresarial', unit: 'MM S/' },
    { name: 'Morosidad', formula: 'Ficha Empresarial', unit: 'Porcentaje' },
  ];
}
