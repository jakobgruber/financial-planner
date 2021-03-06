import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {Debt, Person} from './debts.models';
import * as DebtsSelectors from './selectors/debts.selectors';
import * as DebtsActions from './actions/debts.actions';
import {RootStoreState} from '../root-store.state';

@Injectable({
  providedIn: 'root'
})
export class DebtsStoreService {

  constructor(private store: Store<RootStoreState>) {
  }

  getPersons(): Observable<Person[]> {
    return this.store.select(DebtsSelectors.selectPersons);
  }

  getPerson(personId: string): Observable<Person> {
    return this.store.select(DebtsSelectors.selectPerson(personId));
  }

  addPerson(person: Person) {
    this.store.dispatch(new DebtsActions.AddPersonAction({person}));
  }

  updatePerson(person: Person) {
    this.store.dispatch(new DebtsActions.UpdatePersonAction({person}));
  }

  removePerson(person: Person) {
    this.store.dispatch(new DebtsActions.RemovePersonAction({person}));
  }

  getDebts(personId: string): Observable<Debt[]> {
    return this.store.select(DebtsSelectors.selectDebtsFromPerson(personId));
  }

  getDebt(personId: string, debtId: string): Observable<Debt> {
    return this.store.select(DebtsSelectors.selectDebt(personId, debtId));
  }

  addDebt(debt: Debt) {
    return this.store.dispatch(new DebtsActions.AddDebtAction({debt}));
  }

  updateDebt(debt: Debt) {
    return this.store.dispatch(new DebtsActions.UpdateDebtAction({debt}));
  }

  markDebtAsPaid(debt: Debt) {
    return this.store.dispatch(new DebtsActions.MarkDebtAsPaidAction({debt}));
  }

  removeDebt(debt: Debt) {
    return this.store.dispatch(new DebtsActions.RemoveDebtAction({debt}));
  }
}
