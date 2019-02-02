import {DebtsState} from './debts.state';

export function getTestDebtsState(): DebtsState {
  return {
    persons: [
      {
        id: 'nepomuk',
        name: 'Nepomuk',
        description: 'some friend'
      }, {
        id: 'sepp',
        name: 'Sepp',
        description: 'don\'t lend him any money, he will never pay back'
      }
    ],
    debts: [{
      id: 'nepomuk_1',
      personId: 'nepomuk',
      title: 'beer',
      amount: 100,
      description: 'drunk a lot of beer',
      isPaid: false,
      isMine: true
    }, {
      id: 'nepomuk_2',
      personId: 'nepomuk',
      title: 'lost a bet',
      amount: 10,
      description: 'i won the bet :)',
      isPaid: true,
      isMine: false
    }, {
      id: 'sepp_1',
      personId: 'sepp',
      title: 'bitcoins',
      amount: 30000,
      description: 'he bought bitcoins in 2017Q4...',
      isPaid: false,
      isMine: false
    }, {
      id: 'sepp_2',
      personId: 'sepp',
      title: 'pizza',
      amount: 100,
      description: 'with salami :)',
      isPaid: false,
      isMine: false
    }]
  };
}
