import {DebtsState} from './debts.state';

export function getTestDebtsState(): DebtsState {
  return {
    persons: [
      {
        id: 0,
        name: 'Nepomuk',
        description: 'some friend',
        debts: [{
          id: 0,
          title: 'beer',
          amount: 100,
          description: 'drunk a lot of beer',
          isPaid: false
        }, {
          id: 1,
          title: 'lost a bet',
          amount: 10,
          description: 'i won the bet :)',
          isPaid: true
        }]
      }, {
        id: 1,
        name: 'Sepp',
        description: 'don\'t lend him any money, he will never pay back',
        debts: [{
          id: 0,
          title: 'bitcoins',
          amount: 30000,
          description: 'this idiot bought bitcoins in 2017Q4...',
          isPaid: false
        }, {
          id: 1,
          title: 'pizza',
          amount: 100,
          description: 'with salami :)',
          isPaid: false
        }]
      }
    ]
  };
}
