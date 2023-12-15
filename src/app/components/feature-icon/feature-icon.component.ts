import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-feature-icon',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './feature-icon.component.html',
  styleUrl: './feature-icon.component.css'
})
export class FeatureIconComponent {
  @Input() path = ""
  @Input() src = ""
  @Input() hoverSrc = ""
  @Input() title = ""
}
