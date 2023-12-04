import { Component } from '@angular/core';
import { CardComponent } from '../../components/blog/card/card.component';
import { FeatureIconComponent } from '../../components/feature-icon/feature-icon.component';
import { HeaderLineComponent } from '../../components/blog/header-line/header-line.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CardComponent, FeatureIconComponent, HeaderLineComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  date:Date = new Date()
}
