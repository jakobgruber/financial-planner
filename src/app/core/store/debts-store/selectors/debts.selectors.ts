import {createFeatureSelector, createSelector} from '@ngrx/store';
import {DebtsState} from '../debts.state';

export const selectDebtsState = createFeatureSelector<DebtsState>('debts');

export const selectPersons = createSelector(selectDebtsState, (debtsState: DebtsState) => {
  return debtsState.persons;
});
