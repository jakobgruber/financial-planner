import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PersonListComponent} from './components/persons/person-list/person-list.component';
import {PersonEditComponent} from './components/persons/person-edit/person-edit.component';
import {PersonDetailComponent} from './components/persons/person-detail/person-detail.component';
import {DebtEditComponent} from './components/debts/debt-edit/debt-edit.component';
import {RouterData} from '../../core/models/router-data.model';

const routes: Routes = [
  {
    path: '', component: PersonListComponent,
    data: {
      title: 'Persons'
    } as RouterData
  },
  {
    path: 'person/edit/:id', component: PersonEditComponent,
    data: {
      title: 'Edit/Add Person',
      hasBackButton: true
    } as RouterData
  },
  {
    path: 'person/detail/:id', component: PersonDetailComponent,
    data: {
      title: 'Person Detail',
      hasBackButton: true
    } as RouterData
  },
  {
    path: 'person/detail/:personId/debt/edit/:debtId', component: DebtEditComponent,
    data: {
      title: 'Edit/Add Person Debt',
      hasBackButton: true
    } as RouterData
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DebtsRoutingModule {
}
