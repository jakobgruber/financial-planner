import {Action} from '@ngrx/store';
import {Person} from '../debts.models';

export enum DebtStoreActionsType {
  AddPerson = '[DEBTS] Add Person'
}

export class AddPersonAction implements Action {
  readonly type = DebtStoreActionsType.AddPerson;

  constructor(public payload: Person) { }
}

export type DebtActions =
  AddPersonAction;
