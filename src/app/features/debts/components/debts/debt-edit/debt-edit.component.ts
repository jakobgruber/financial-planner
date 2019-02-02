import {Component, OnInit} from '@angular/core';
import {Debt} from '../../../../../core/store/debts-store/debts.models';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {SnackbarService} from '../../../../../core/services/snackbar.service';
import {DebtsStoreService} from '../../../../../core/store/debts-store/debts-store.service';
import {first} from 'rxjs/operators';
import {createRandomId, validateAllFormFields} from '../../../../../utilities/utilities';

@Component({
  selector: 'app-debt-edit',
  templateUrl: './debt-edit.component.html'
})
export class DebtEditComponent implements OnInit {
  personId: string;
  debt: Debt;

  debtForm: FormGroup;
  titleInput: FormControl;
  descriptionInput: FormControl;
  amountInput: FormControl;

  constructor(private debtsStoreService: DebtsStoreService,
              private router: Router,
              private activatedRoute: ActivatedRoute,
              private snackbarService: SnackbarService) {

  }

  get isNewDebt(): boolean {
    return this.debt.id === 'new';
  }

  ngOnInit() {
    this.loadDebtAndCreateForm();
  }

  saveDebt() {
    validateAllFormFields(this.debtForm);

    if (this.debtForm.invalid) {
      return;
    }

    this.debt.title = this.titleInput.value;
    this.debt.amount = this.amountInput.value;
    this.debt.description = this.descriptionInput.value;

    if (this.isNewDebt) {
      this.debt.personId = this.personId;
      this.debt.id = createRandomId();
      this.debt.isPaid = false;
      this.debt.isMine = false;
      this.debtsStoreService.addDebt(this.debt);
      this.snackbarService.open('Debt ' + this.debt.title + ' created');
    } else {
      this.debtsStoreService.updateDebt(this.debt);
      this.snackbarService.open('Debt ' + this.debt.title + ' edited');
    }

    this.navigateBackToPerson();
  }

  cancel() {
    this.navigateBackToPerson();
  }

  private loadDebtAndCreateForm() {
    this.personId = this.activatedRoute.snapshot.params.personId;
    const debtId = this.activatedRoute.snapshot.params.debtId;

    this.debtsStoreService.getDebt(this.personId, debtId)
      .pipe(first())
      .subscribe((debt: Debt) => {
        this.debt = {...debt};

        if (!debt) {
          this.debt.id = 'new';
        }

        this.createForm();
      });
  }

  private createForm() {
    this.titleInput = new FormControl(this.debt.title, [Validators.required]);
    this.descriptionInput = new FormControl(this.debt.description, [Validators.required]);
    this.amountInput = new FormControl(this.debt.amount, [Validators.required]);

    this.debtForm = new FormGroup({
      titleInput: this.titleInput,
      descriptionInput: this.descriptionInput,
      amountInput: this.amountInput
    });
  }

  private navigateBackToPerson() {
    this.router.navigate(['/debts/person/detail', this.personId]);
  }
}
