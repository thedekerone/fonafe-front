import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-feature-icon',
  standalone: true,
  imports: [],
  templateUrl: './feature-icon.component.html',
  styleUrl: './feature-icon.component.css'
})
export class FeatureIconComponent {
  @Input() src = ""
  @Input() hoverSrc = ""
  @Input() title = ""
}
