import { CurrencyPipe } from '@angular/common'
import { Component, computed, inject } from '@angular/core'
import { CalculatorService } from '../calculator.service'

@Component({
  selector: 'app-investments-results',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './investments-results.component.html',
  styleUrl: './investments-results.component.css',
})
export class InvestmentsResultsComponent {
  private calculatorService = inject(CalculatorService)

  calculatedInvestments = computed(() => this.calculatorService.getCalculatedInvestments())
}
