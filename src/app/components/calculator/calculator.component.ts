import { Component } from '@angular/core'
import { InvestmentsInputComponent } from './investments-input/investments-input.component'
import { InvestmentsResultsComponent } from './investments-results/investments-results.component'

@Component({
  selector: 'app-calculator',
  standalone: true,
  imports: [InvestmentsInputComponent, InvestmentsResultsComponent],
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.css',
})
export class CalculatorComponent {}
