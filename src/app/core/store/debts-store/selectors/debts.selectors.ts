import {createFeatureSelector, createSelector} from '@ngrx/store';
import {DebtsState} from '../debts.state';
import {Debt, Person} from '../debts.models';

export const selectDebtsState = createFeatureSelector<DebtsState>('debts');

export const selectPersons = createSelector(selectDebtsState, (debtsState: DebtsState) => {
  return debtsState.persons;
});

export const selectDebts = createSelector(selectDebtsState, (debtState: DebtsState) => {
  return debtState.debts;
});

export const selectPerson = (personId: string) => {
  return createSelector(selectPersons, (persons: Person[]) => {
    return persons.find((person: Person) => {
      return person.id === personId;
    });
  });
};

export const selectDebtsFromPerson = (personId: string) => {
  return createSelector(selectDebts, (debts: Debt[]) => {
    return debts.filter((debt: Debt) => {
      return debt.personId === personId;
    });
  });
};
