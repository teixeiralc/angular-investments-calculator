import { Injectable, signal } from '@angular/core'
import { CalculatedInvestments } from '../../models/calculated-investments'
import Investments from '../../models/investments'

@Injectable({ providedIn: 'root' })
export class CalculatorService {
  private investmentsData = signal<Investments | null>(null)

  setInvestmentsData(investmentsData: Investments) {
    this.investmentsData.set(investmentsData)
  }

  investmentsCalculatedByYear: CalculatedInvestments[] = []
  calculateInvestments() {
    const annualInvestment = this.investmentsData()!.monthlyInvestment * 12
    let investmentValue = this.investmentsData()!.initialInvestment

    for (let i = 0; i < this.investmentsData()!.duration; i++) {
      const year = i + 1
      const interestEarnedInYear = investmentValue * (this.investmentsData()!.interesetRate / 100)
      investmentValue += interestEarnedInYear + annualInvestment
      const totalInterest = investmentValue - annualInvestment * year - this.investmentsData()!.initialInvestment
      this.investmentsCalculatedByYear.push({
        year: year,
        interest: interestEarnedInYear,
        valueEndOfYear: investmentValue,
        annualInvestment: annualInvestment,
        totalInterest: totalInterest,
        totalAmountInvested: this.investmentsData()!.initialInvestment + annualInvestment * year,
      })
    }
  }

  getCalculatedInvestments() {
    return this.investmentsCalculatedByYear
  }

  clearCalculatedInvestments() {
    this.investmentsCalculatedByYear.length = 0
  }
}
