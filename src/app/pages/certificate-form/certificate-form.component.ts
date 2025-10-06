import { Component } from '@angular/core';
import { PrimaryButtonComponent } from "../../_components/primary-button/primary-button.component";
import { SecondaryButtonComponent } from "../../_components/secondary-button/secondary-button.component";
import { FormsModule, NgModel } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Certificate } from '../../interfaces/certificate';

@Component({
  selector: 'app-certificate-form',
  imports: [PrimaryButtonComponent, SecondaryButtonComponent, FormsModule, CommonModule],
  templateUrl: './certificate-form.component.html',
  styleUrl: './certificate-form.component.css'
})
export class CertificateFormComponent {
  activity: string = '';

  certificate: Certificate = {
    name: '',
    activities: [],
    issueDate: ''
  };
  
  validateField(field: NgModel) {
    return field.invalid && field.touched;
  }
  
  validateForm() {
    return this.certificate.name.length > 0 && this.certificate.activities.length > 0;
  }
  
  addActivity() {
    this.certificate.activities.push(this.activity);
    this.activity = '';
  }
  
  removeActivitybyIndex(index: number) {
    this.certificate.activities.splice(index, 1);
  }
  
  generateCertificate() {
    if (!this.validateForm()) return;
    this.certificate.issueDate = this.getActualDate();
    console.log(this.certificate);
  }

  getActualDate(): string {
    const date = new Date();

    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();

    return `${day}/${month}/${year}`;
  }
}
