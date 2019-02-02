import {DebtsPaymentStatePipe} from './debts-payment-state.pipe';
import {Debt} from '../../../core/store/debts-store/debts.models';
import {createTestDebtsState} from '../../../core/store/debts-store/debts.mock';

describe('DebtsPaymentStatePipe', () => {
  let debts: Debt[];
  let pipe: DebtsPaymentStatePipe;

  beforeEach(() => {
    debts = createTestDebtsState().debts;
    pipe = new DebtsPaymentStatePipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should filter for unpaid debts', () => {
    const filteredDebts = pipe.transform(debts, 'unpaid');
    const hasPaidDebts = filteredDebts.some(debt => debt.isPaid);

    expect(hasPaidDebts).toBeFalsy();
  });

  it('should filter for paid debts', () => {
    const filteredDebts = pipe.transform(debts, 'paid');
    const hasUnpaidDebts = filteredDebts.some(debt => !debt.isPaid);

    expect(hasUnpaidDebts).toBeFalsy();
  });

  it('should filter nothing if no option is provided', () => {
    expect(pipe.transform(debts).length).toBe(4);
  });

  it('should filter nothing if invalid options is provided', () => {
    expect(pipe.transform(debts, 'invalid').length).toBe(4);
  });
});
