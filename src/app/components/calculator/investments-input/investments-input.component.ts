import { CurrencyPipe } from '@angular/common'
import { Component, inject, signal } from '@angular/core'
import { FormsModule } from '@angular/forms'
import Investments from '../../../models/investments'
import { CalculatorService } from '../calculator.service'

@Component({
  selector: 'app-investments-input',
  standalone: true,
  imports: [FormsModule, CurrencyPipe],
  templateUrl: './investments-input.component.html',
  styleUrl: './investments-input.component.css',
})
export class InvestmentsInputComponent {
  private calculatorService = inject(CalculatorService)

  initialInvestment = signal<number>(100)
  monthlyInvestment = signal<number>(10)
  interestRate = signal<number>(8)
  duration = signal<number>(3)

  investmentsData?: Investments

  onSubmit() {
    this.calculatorService.clearCalculatedInvestments()
    this.investmentsData = {
      initialInvestment: this.initialInvestment(),
      monthlyInvestment: this.monthlyInvestment(),
      interestRate: this.interestRate(),
      duration: this.duration(),
    }
    this.calculatorService.setInvestmentsData(this.investmentsData)
    this.calculatorService.calculateInvestments()
  }
}
