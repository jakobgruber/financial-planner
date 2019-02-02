import {createFeatureSelector, createSelector} from '@ngrx/store';
import {DebtsState} from '../debts.state';
import {Person} from '../debts.models';

export const selectDebtsState = createFeatureSelector<DebtsState>('debts');

export const selectPersons = createSelector(selectDebtsState, (debtsState: DebtsState) => {
  return debtsState.persons;
});

export const selectPerson = (personId: string) => {
  return createSelector(selectPersons, (persons: Person[]) => {
    return persons.find((person: Person) => {
      return person.id === personId;
    });
  });
};
