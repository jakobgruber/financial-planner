import {RootStoreState} from '../../root-store.state';
import {createRootTestDebtsState} from '../debts.mock';
import * as DebtsSelectors from './debts.selectors';

describe('DebtsSelectors', () => {
  let rootState: RootStoreState;

  beforeEach(() => {
    rootState = createRootTestDebtsState();
  });

  describe('selectDebtsState', () => {
    it('should select debts-feature-state', () => {
      const selectedState = DebtsSelectors.selectDebtsState(rootState);

      expect(selectedState).toBe(rootState.debts);
    });
  });

  describe('selectPersons', () => {
    it('should select persons', () => {
      const selectedState = DebtsSelectors.selectPersons(rootState);

      expect(selectedState).toBe(rootState.debts.persons);
    });
  });
});
