import { DatePipe } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})


export class CardComponent {
  @Input({ required: true }) title: string = "Placeholder title"
  @Input() imageSrc: string = "https://i0.wp.com/official.pookwatches.com/wp-content/uploads/2019/09/placeholder-1.png?fit=1200%2C800&ssl=1";
  @Input({ required: true }) date: Date= new Date();
  @Input() url:string = ""
}
