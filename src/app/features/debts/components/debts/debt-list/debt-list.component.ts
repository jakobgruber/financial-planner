import {Component, Input} from '@angular/core';
import {Debt} from '../../../../../core/store/debts-store/debts.models';
import {SnackbarService} from '../../../../../core/services/snackbar.service';
import {DebtsStoreService} from '../../../../../core/store/debts-store/debts-store.service';

@Component({
  selector: 'app-debt-list',
  templateUrl: './debt-list.component.html',
  styleUrls: ['./debt-list.component.scss']
})
export class DebtListComponent {
  @Input() debts: Debt[];

  constructor(private debtsStoreService: DebtsStoreService,
              private snackbarService: SnackbarService) {

  }

  markDebtAsPaid(debt: Debt) {
    this.debtsStoreService.markDebtAsPaid(debt);
    this.snackbarService.open('Debt ' + debt.title + ' paid');
  }

  deleteDebt(debt: Debt) {
    this.debtsStoreService.removeDebt(debt);
    this.snackbarService.open('Debt ' + debt.title + ' deleted');
  }
}
