import {DebtsState} from '../debts.state';
import {createTestDebtsState} from '../debts.mock';
import {Debt, Person} from '../debts.models';
import {debtsReducer} from './debts.reducer';
import * as DebtActions from '../actions/debts.actions';

describe('debtsReducer', () => {
  let oldState: DebtsState;
  let testPerson: Person;
  let testDebt: Debt;

  beforeEach(() => {
    oldState = createTestDebtsState();

    testPerson = {
      id: 'franz',
      name: 'Franz',
      description: 'favorite food: pizza'
    };

    testDebt = {
      id: 'kreisky',
      personId: 'franz',
      title: 'kreisky-concert',
      amount: 33,
      description: 'entrance fee @ wuk/vienna',
      isPaid: false,
      isMine: true
    };
  });

  describe('AddPersonAction', () => {
    it('should add person', () => {
      const action = new DebtActions.AddPersonAction({person: testPerson});

      const newState = debtsReducer(oldState, action);

      expect(newState.persons[2]).toBe(testPerson);
    });

    it('should not modify old state', () => {
      const action = new DebtActions.AddPersonAction({person: testPerson});

      debtsReducer(oldState, action);

      expect(oldState.persons.length).toEqual(2);
    });
  });

  describe('UpdatePersonAction', () => {
    beforeEach(() => {
      testPerson.id = 'sepp';
    });

    it('should update person', () => {
      const action = new DebtActions.UpdatePersonAction({person: testPerson});

      const newState = debtsReducer(oldState, action);

      expect(newState.persons[1]).toBe(testPerson);
    });

    it('should not modify old state', () => {
      const action = new DebtActions.UpdatePersonAction({person: testPerson});

      debtsReducer(oldState, action);

      expect(oldState.persons[1].name).toEqual('Sepp');
    });
  });

  describe('RemovePersonAction', () => {
    it('should remove person', () => {
      const notDeletedPerson = oldState.persons[1];
      const action = new DebtActions.RemovePersonAction({person: oldState.persons[0]});

      const newState = debtsReducer(oldState, action);

      expect(newState.persons[0]).toBe(notDeletedPerson);
    });

    it('should not update', () => {
      const action = new DebtActions.RemovePersonAction({person: oldState.persons[0]});

      debtsReducer(oldState, action);

      expect(oldState.persons.length).toEqual(2);
    });
  });

  describe('AddDebtAction', () => {
    it('should add debt', () => {
      const action = new DebtActions.AddDebtAction({debt: testDebt});

      const newState = debtsReducer(oldState, action);

      expect(newState.debts[4]).toBe(testDebt);
    });

    it('should not modify old state', () => {
      const action = new DebtActions.AddDebtAction({debt: testDebt});

      debtsReducer(oldState, action);

      expect(oldState.debts.length).toEqual(4);
    });
  });

  describe('UpdateDebtAction', () => {
    beforeEach(() => {
      testDebt.id = 'nepomuk_1';
    });

    it('should update debt', () => {
      const action = new DebtActions.UpdateDebtAction({debt: testDebt});

      const newState = debtsReducer(oldState, action);

      expect(newState.debts[0]).toBe(testDebt);
    });

    it('should not modify old state', () => {
      const action = new DebtActions.UpdateDebtAction({debt: testDebt});

      debtsReducer(oldState, action);

      expect(oldState.debts[0].title).toEqual('beer');
    });
  });

  describe('RemoveDebtAction', () => {
    it('should remove debt', () => {
      const notDeletedDebt = oldState.debts[1];
      const action = new DebtActions.RemoveDebtAction({debt: oldState.debts[0]});

      const newState = debtsReducer(oldState, action);

      expect(newState.debts[0]).toBe(notDeletedDebt);
    });

    it('should not modify old state', () => {
      const action = new DebtActions.RemoveDebtAction({debt: oldState.debts[0]});

      debtsReducer(oldState, action);

      expect(oldState.debts.length).toEqual(4);
    });
  });

  describe('MarkDebtAsPaidAction', () => {
    beforeEach(() => {
      oldState.debts[0].isPaid = false;
    });

    it('should set isPaid to true', () => {
      const action = new DebtActions.MarkDebtAsPaidAction({debt: oldState.debts[0]});

      const newState = debtsReducer(oldState, action);

      expect(newState.debts[0].isPaid).toBeTruthy();
    });

    it('should not modify old state', () => {
      const action = new DebtActions.MarkDebtAsPaidAction({debt: oldState.debts[0]});

      debtsReducer(oldState, action);

      expect(oldState.debts[0].isPaid).toBeFalsy();
    });
  });
});
