import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './_components/navbar/navbar.component';
import { PrimaryButtonComponent } from './_components/primary-button/primary-button.component';
import { SecondaryButtonComponent } from './_components/secondary-button/secondary-button.component';
import { CertifiedItemComponent } from './_components/certified-item/certified-item.component';
import { BaseUiComponent } from "./_components/base-ui/base-ui.component";
import { CertifiedsComponent } from "./pages/certifieds/certifieds.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, PrimaryButtonComponent, SecondaryButtonComponent, CertifiedItemComponent, BaseUiComponent, CertifiedsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'certified-generator';
  showNavbar = true;
}
