import {DebtsState, initialDebtsState} from '../debts.state';
import * as DebtActions from '../actions/debts.actions';
import {Debt, Person} from '../debts.models';
import {removeArrayItemImmutable, updateArrayItemImmutable} from '../../../../utilities/immutable';
import {DebtStoreActionsType} from '../actions/debts.actions';

export function debtsReducer(state = initialDebtsState, action: DebtActions.Actions): DebtsState {
  switch (action.type) {
    case DebtStoreActionsType.AddPerson:
      return handleAddPersonAction(state, action);
    case DebtStoreActionsType.UpdatePerson:
      return handleUpdatePersonAction(state, action);
    case DebtStoreActionsType.RemovePerson:
      return handleRemovePersonAction(state, action);
    case DebtStoreActionsType.AddDebt:
      return handleAddDebtAction(state, action);
    case DebtStoreActionsType.UpdateDebt:
      return handleUpdateDebtAction(state, action);
    case DebtStoreActionsType.RemoveDebt:
      return handleRemoveDebtAction(state, action);
    case DebtStoreActionsType.MarkDebtAsPaid:
      return handleMarkDebtAsPaidAction(state, action);
    default:
      return initialDebtsState;
  }
}

function createPersonIndexFunc(personToFind: Person) {
  return (person: Person) => person.id === personToFind.id;
}

function createDebtIndexFunc(debtToFind: Debt) {
  return (debt: Debt) => debt.id === debtToFind.id;
}

function handleAddPersonAction(state: DebtsState, action: DebtActions.AddPersonAction) {
  return {
    ...state,
    persons: [
      ...state.persons,
      action.payload.person
    ]
  };
}

function handleUpdatePersonAction(state: DebtsState, action: DebtActions.UpdatePersonAction) {
  const person = action.payload.person;

  return {
    ...state,
    persons: updateArrayItemImmutable(state.persons, person, createPersonIndexFunc(person))
  };
}

function handleRemovePersonAction(state: DebtsState, action: DebtActions.RemovePersonAction) {
  const person = action.payload.person;

  return {
    ...state,
    persons: removeArrayItemImmutable(state.persons, createPersonIndexFunc(person))
  };
}

function handleAddDebtAction(state: DebtsState, action: DebtActions.AddDebtAction) {
  return {
    ...state,
    debts: [
      ...state.debts,
      action.payload.debt
    ]
  };
}

function handleUpdateDebtAction(state: DebtsState, action: DebtActions.UpdateDebtAction) {
  const debt = action.payload.debt;

  return getNewStateWithUpdatedDebt(state, debt);
}

function handleRemoveDebtAction(state: DebtsState, action: DebtActions.RemoveDebtAction) {
  const debt = action.payload.debt;

  return {
    ...state,
    debts: removeArrayItemImmutable(state.debts, createDebtIndexFunc(debt))
  };
}

function handleMarkDebtAsPaidAction(state: DebtsState, action: DebtActions.MarkDebtAsPaidAction) {
  const debt = action.payload.debt;

  const paidDebt = {
    ...debt,
    isPaid: true
  };

  return getNewStateWithUpdatedDebt(state, paidDebt);
}

function getNewStateWithUpdatedDebt(state, debtToUpdate): DebtsState {
  return {
    ...state,
    debts: updateArrayItemImmutable(state.debts, debtToUpdate, createDebtIndexFunc(debtToUpdate))
  };
}
