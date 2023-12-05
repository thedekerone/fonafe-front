import { Component } from '@angular/core';
import { CardComponent } from '../../components/blog/card/card.component';
import { FeatureIconComponent } from '../../components/feature-icon/feature-icon.component';
import { HeaderLineComponent } from '../../components/blog/header-line/header-line.component';
import { RouterLink } from '@angular/router';
import { Post } from '../../models/post';
import { CardListComponent } from '../../components/blog/card-list/card-list.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CardListComponent, RouterLink, FeatureIconComponent, HeaderLineComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  date: Date = new Date()
  posts: Post[] = [
    {
      title: "Innovating the Future: The Electrifying Journey of VoltEdge Inc.",
      description: "Explore the rise of VoltEdge Inc., a company transforming the electrical industry with sustainable and innovative solutions.",
      imageSrc: "images/voltedge.jpg",
      date: new Date("2023-12-05"),
      id: "voltedge-2023"
    },
    {
      title: "Revolutionizing Tech: The Rise of Quantum Computing",
      description: "Dive into the world of quantum computing and how it's set to change the landscape of technology as we know it.",
      imageSrc: "images/quantum_computing.jpg",
      date: new Date("2023-11-20"),
      id: "quantum-computing-2023"
    },
    {
      title: "Eco-Friendly Innovations: Leading the Way in Green Tech",
      description: "A look at the latest eco-friendly technologies that are making a positive impact on our planet.",
      imageSrc: "images/green_tech.jpg",
      date: new Date("2023-10-15"),
      id: "green-tech-2023"
    },
    {
      title: "The Digital Frontier: Advancements in Virtual Reality",
      description: "Explore the recent advancements in virtual reality and its growing impact on gaming and beyond.",
      imageSrc: "images/virtual_reality.jpg",
      date: new Date("2023-09-10"),
      id: "virtual-reality-2023"
    }
  ];
}
