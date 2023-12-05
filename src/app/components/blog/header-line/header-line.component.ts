import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header-line',
  standalone: true,
  imports: [],
  templateUrl: './header-line.component.html',
  styleUrl: './header-line.component.css'
})
export class HeaderLineComponent {
  @Input() title = ""
}
