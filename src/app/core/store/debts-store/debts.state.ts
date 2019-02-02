import {Person} from './debts.models';
import {getTestDebtsState} from './debts.mock';

export interface DebtsState {
  persons: Person[];
}

// at the moment, start with some test data
export const initialDebtsState = getTestDebtsState();
