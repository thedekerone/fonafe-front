
import { Component, Input, } from '@angular/core';

@Component({
  selector: 'app-lstempresas',
  standalone: true,
  imports: [],
  templateUrl: './lstempresas.component.html',
  styleUrl: './lstempresas.component.css'
})
export class LstempresasComponent {
  @Input() title: string = '';
  @Input() list: string[] = [];
  @Input() url: string = '';
}

