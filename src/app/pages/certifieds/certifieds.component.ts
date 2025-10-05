import { Component } from '@angular/core';

import { CertifiedItemComponent } from "../../_components/certified-item/certified-item.component";
import { Router, RouterLink } from '@angular/router';
import { SecondaryButtonComponent } from '../../_components/secondary-button/secondary-button.component';

@Component({
  selector: 'app-certifieds',
  imports: [CertifiedItemComponent, SecondaryButtonComponent, RouterLink],
  templateUrl: './certifieds.component.html',
  styleUrl: './certifieds.component.css'
})
export class CertifiedsComponent {
  constructor(private router: Router) {}
}
