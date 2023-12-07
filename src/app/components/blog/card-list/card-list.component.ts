import { Component, Input } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { Post } from '../../../models/post';
import { HeaderLineComponent } from '../header-line/header-line.component';

@Component({
  selector: 'app-card-list',
  standalone: true,
  imports: [CardComponent, HeaderLineComponent],
  templateUrl: './card-list.component.html',
  styleUrl: './card-list.component.css'
})
export class CardListComponent {
  @Input({required: true}) posts: Post[] = []
  @Input() title: string = "Ver mas"
}
