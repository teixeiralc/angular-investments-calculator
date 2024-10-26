import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { CalculatorComponent } from "./components/calculator/calculator.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, CalculatorComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'investments-calculator';
}
