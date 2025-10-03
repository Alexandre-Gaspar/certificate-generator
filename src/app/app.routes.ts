import { Routes } from '@angular/router';
import { CertificateComponent } from './pages/certificate/certificate.component';
import { CertifiedsComponent } from './pages/certifieds/certifieds.component';
import { CertificateFormComponent } from './pages/certificate-form/certificate-form.component';

export const routes: Routes = [
  { path: '', component: CertifiedsComponent },
  { path: 'certificates/:id', component: CertificateComponent },
  { path: 'certificate/new', component: CertificateFormComponent },
];
