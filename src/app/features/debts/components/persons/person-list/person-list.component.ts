import { Component, OnInit } from '@angular/core';
import {Person} from '../../../../../core/store/debts-store/debts.models';
import {Observable} from 'rxjs';
import {DebtsStoreService} from '../../../../../core/store/debts-store/debts-store.service';
import {SnackbarService} from '../../../../../core/services/snackbar.service';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.scss']
})
export class PersonListComponent implements OnInit {

  persons$: Observable<Person[]>;

  constructor(private debtsStoreService: DebtsStoreService,
              private snackbarService: SnackbarService
  ) {

  }

  ngOnInit() {
    this.persons$ = this.debtsStoreService.getPersons();
  }

  deletePerson(person: Person) {
    this.debtsStoreService.deletePerson(person);
    this.snackbarService.open('Person ' + person.name + ' deleted');
  }
}
