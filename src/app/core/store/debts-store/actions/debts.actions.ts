import {Action} from '@ngrx/store';
import {Debt, Person} from '../debts.models';

export enum DebtStoreActionsType {
  AddPerson = '[DEBTS] Add Person',
  UpdatePerson = '[DEBTS] Update Person',
  RemovePerson = '[DEBTS] Remove Person',
  AddDebt = '[DEBTS] Add Debt',
  UpdateDebt = '[DEBTS] Update Debt',
  RemoveDebt = '[DEBTS] Remove Debt',
  MarkDebtAsPaid = '[DEBTS] Mark Debt As Paid'
}

export class AddPersonAction implements Action {
  readonly type = DebtStoreActionsType.AddPerson;

  constructor(public payload: {person: Person}) {
  }
}

export class UpdatePersonAction implements Action {
  readonly type = DebtStoreActionsType.UpdatePerson;

  constructor(public payload: {person: Person}) {
  }
}

export class RemovePersonAction implements Action {
  readonly type = DebtStoreActionsType.RemovePerson;

  constructor(public payload: {person: Person}) {
  }
}

export class AddDebtAction implements Action {
  readonly type = DebtStoreActionsType.AddDebt;

  constructor(public payload: {debt: Debt}) {
  }
}

export class UpdateDebtAction implements Action {
  readonly type = DebtStoreActionsType.UpdateDebt;

  constructor(public payload: {debt: Debt}) {
  }
}

export class RemoveDebtAction implements Action {
  readonly type = DebtStoreActionsType.RemoveDebt;

  constructor(public payload: {debt: Debt}) {
  }
}

export class MarkDebtAsPaidAction implements Action {
  readonly type = DebtStoreActionsType.MarkDebtAsPaid;

  constructor(public payload: {debt: Debt}) {
  }
}

export type Actions =
  AddPersonAction
  | UpdatePersonAction
  | RemovePersonAction
  | AddDebtAction
  | UpdateDebtAction
  | RemoveDebtAction
  | MarkDebtAsPaidAction;
