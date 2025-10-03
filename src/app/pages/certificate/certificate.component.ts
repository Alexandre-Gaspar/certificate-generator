import { Component } from '@angular/core';
import { SecondaryButtonComponent } from "../../_components/secondary-button/secondary-button.component";
import { Router } from '@angular/router';

@Component({
  selector: 'app-certificate',
  imports: [SecondaryButtonComponent],
  templateUrl: './certificate.component.html',
  styleUrl: './certificate.component.css'
})
export class CertificateComponent {
  constructor(private router: Router) {}

  goBack() {
    this.router.navigate(['']);
  }

}
