import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PersonListComponent} from './components/persons/person-list/person-list.component';
import {PersonEditComponent} from './components/persons/person-edit/person-edit.component';
import {PersonDetailComponent} from './components/persons/person-detail/person-detail.component';
import {DebtEditComponent} from './components/debts/debt-edit/debt-edit.component';

const routes: Routes = [
  {path: '', component: PersonListComponent},
  {path: 'person/edit/:id', component: PersonEditComponent},
  {path: 'person/detail/:id', component: PersonDetailComponent},
  {path: 'person/detail/:personId/debt/edit/:debtId', component: DebtEditComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DebtsRoutingModule {
}
