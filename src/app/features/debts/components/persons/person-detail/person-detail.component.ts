import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {DebtsStoreService} from '../../../../../core/store/debts-store/debts-store.service';
import {Observable} from 'rxjs';
import {Debt, Person} from '../../../../../core/store/debts-store/debts.models';

@Component({
  selector: 'app-person-detail',
  templateUrl: './person-detail.component.html'
})
export class PersonDetailComponent implements OnInit {
  personId: string;
  person$: Observable<Person>;
  debts$: Observable<Debt[]>;

  constructor(private activatedRoute: ActivatedRoute, private debtsStoreService: DebtsStoreService) {

  }

  ngOnInit() {
    this.personId = this.activatedRoute.snapshot.params.id;

    if (this.personId !== undefined) {
      this.person$ = this.debtsStoreService.getPerson(this.personId);
    }

    //this.debts$ = this.debtsStoreService.getDebts(this.personId);
  }
}
