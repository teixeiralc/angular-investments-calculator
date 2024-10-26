import { CurrencyPipe } from '@angular/common'
import { Component, signal } from '@angular/core'
import { FormsModule } from '@angular/forms'

@Component({
  selector: 'app-investments-input',
  standalone: true,
  imports: [FormsModule, CurrencyPipe],
  providers: [CurrencyPipe],
  templateUrl: './investments-input.component.html',
  styleUrl: './investments-input.component.css',
})
export class InvestmentsInputComponent {
  initialInvestment = signal<number>(0)
  monthlyInvestment = signal<number>(0)
  interestRate = signal<number>(10)
  duration = signal<number>(1)
}
