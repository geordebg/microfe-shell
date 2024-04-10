import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  constructor(private readonly router: Router) {
  }

  navigateToNG16(): void {
    this.router.navigateByUrl('packages/new-package');
  }

  navigateTo() {
    this.router.navigateByUrl('flights/new-flight');
  }
}
