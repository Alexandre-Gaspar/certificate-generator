import { Component } from '@angular/core';
import { SecondaryButtonComponent } from "../../_components/secondary-button/secondary-button.component";
import { CertifiedItemComponent } from "../../_components/certified-item/certified-item.component";

@Component({
  selector: 'app-certifieds',
  imports: [SecondaryButtonComponent, CertifiedItemComponent],
  templateUrl: './certifieds.component.html',
  styleUrl: './certifieds.component.css'
})
export class CertifiedsComponent {

}
