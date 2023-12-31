import { DatePipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [DatePipe, RouterModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})

export class CardComponent {
  @Input({ required: true }) title: string = "Placeholder title"
  @Input() imageUrl: string = "../../../../assets/IMAGEN.svg"
  @Input({ required: true }) date: Date= new Date();
  @Input() id:string = ""
  @Input() url:string = ""

}
