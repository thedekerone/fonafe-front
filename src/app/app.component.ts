import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from "./components/navbar/navbar.component";
import Quill from 'quill'


const parchment = Quill.import('parchment')
const block = parchment.query('block')
block.tagName = 'DIV'
// or class NewBlock extends Block {} NewBlock.tagName = 'DIV'
Quill.register(block /* or NewBlock */, true)


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, RouterLink, FooterComponent, NavbarComponent]
})
export class AppComponent {
  title = 'fonafe-front';

  constructor(private router: Router) {}

  shouldShowLayout(): boolean {
    const currentRoute = this.router.url;
    return currentRoute !== '/login';
  }

}
