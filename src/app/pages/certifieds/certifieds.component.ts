import { Component } from '@angular/core';

import { CertifiedItemComponent } from "../../_components/certified-item/certified-item.component";
import { Router } from '@angular/router';

@Component({
  selector: 'app-certifieds',
  imports: [CertifiedItemComponent],
  templateUrl: './certifieds.component.html',
  styleUrl: './certifieds.component.css'
})
export class CertifiedsComponent {
  constructor(private router: Router) {}
}
