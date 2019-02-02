import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {Person} from './debts.models';
import * as DebtsSelectors from './selectors/debts.selectors';
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
}
