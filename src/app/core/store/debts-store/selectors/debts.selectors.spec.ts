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

  describe('selectPerson', () => {
    it('should select person with id', () => {
      const selectedState = DebtsSelectors.selectPerson('nepomuk')(rootState);

      expect(selectedState.name).toEqual('Nepomuk');
    });
  });

  describe('selectDebtsFromPerson', () => {
    it('should select debts for person', () => {
      const selectedState = DebtsSelectors.selectDebtsFromPerson('sepp')(rootState);

      expect(selectedState[0].id).toEqual('sepp_1');
      expect(selectedState[1].id).toEqual('sepp_2');
    });
  });

  describe('selectDebt', () => {
    it('should select debt for person with debtId', () => {
      const selectedState = DebtsSelectors.selectDebt('sepp', 'sepp_1')(rootState);

      expect(selectedState.id).toEqual('sepp_1');
    });

    it('should select nothing when debtId does not belong to person', () => {
      const selectedState = DebtsSelectors.selectDebt('does not exist', 'sepp_1')(rootState);

      expect(selectedState).toBeUndefined();
    });
  });
});
