import { Component } from '@angular/core';
import { CardComponent } from '../../components/blog/card/card.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  date:Date = new Date()
}
