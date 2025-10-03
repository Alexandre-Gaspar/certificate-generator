import { Component } from '@angular/core';
import { SecondaryButtonComponent } from "../secondary-button/secondary-button.component";
import { Router } from '@angular/router';

@Component({
  selector: 'app-certified-item',
  imports: [SecondaryButtonComponent],
  templateUrl: './certified-item.component.html',
  styleUrl: './certified-item.component.css'
})
export class CertifiedItemComponent {
  constructor(private router: Router) {}

  navigateToCertificate(id: string) {
    this.router.navigate(['/certificates', id]);
  }
}
