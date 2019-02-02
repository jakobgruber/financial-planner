import {DebtsState, initialDebtsState} from '../debts.state';
import {DebtActions, DebtStoreActionsType} from '../actions/debts.actions';
import {Person} from '../debts.models';

export function debtsReducer(state = initialDebtsState, action: DebtActions): DebtsState {
  switch (action.type) {
    case DebtStoreActionsType.AddPerson:
      handleAddPersonAction(state, action.payload);
      break;
    default:
      return initialDebtsState;
  }
}

function handleAddPersonAction(state: DebtsState, person: Person) {
  return {
    persons: {
      ...state.persons,
      person
    }
  };
}

