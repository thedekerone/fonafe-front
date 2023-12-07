import { Component } from '@angular/core';

@Component({
  selector: 'app-memoria',
  standalone: true,
  imports: [],
  templateUrl: './memoria.component.html',
  styleUrl: './memoria.component.css'
})
export class MemoriaComponent {
  abrirPDF(ruta: string): void {
    // Construye la ruta completa al archivo PDF
    const rutaCompleta = location.origin + '/' + ruta;

    // Abre el PDF en una nueva pestaña
    window.open(rutaCompleta, '_blank');
  }
}
