import { Component } from '@angular/core';
import { LstempresasComponent } from "../../components/lstempresas/lstempresas.component";

@Component({
    selector: 'app-nosotros',
    standalone: true,
    templateUrl: './nosotros.component.html',
    styleUrl: './nosotros.component.css',
    imports: [LstempresasComponent]
})
export class NosotrosComponent {

}
