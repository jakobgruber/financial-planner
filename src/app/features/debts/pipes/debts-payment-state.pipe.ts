import {Pipe, PipeTransform} from '@angular/core';
import {Debt} from '../../../core/store/debts-store/debts.models';

@Pipe({
  name: 'debtsPaymentState'
})
export class DebtsPaymentStatePipe implements PipeTransform {
  transform(debts: Debt[], state?: string): Debt[] {
    if (state === 'unpaid') {
      return debts.filter(debt => !debt.isPaid);
    }

    if (state === 'paid') {
      return debts.filter(debt => debt.isPaid);
    }

    return debts;
  }
}
