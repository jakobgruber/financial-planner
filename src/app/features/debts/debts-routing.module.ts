import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PersonListComponent} from './components/persons/person-list/person-list.component';
import {PersonEditComponent} from './components/persons/person-edit/person-edit.component';
import {PersonDetailComponent} from './components/persons/person-detail/person-detail.component';
import {DebtEditComponent} from './components/debts/debt-edit/debt-edit.component';
import {RouterData} from '../../core/models/router-data.model';

const routes: Routes = [
  {
    path: 'persons',
    children: [
      {
        path: 'list', component: PersonListComponent,
        data: {
          title: 'Persons'
        } as RouterData,
        children: []
      }, {
        path: 'edit/:id', component: PersonEditComponent,
        data: {
          title: 'Edit/Add Person',
          hasBackButton: true
        } as RouterData
      }, {
        path: 'detail',
        children: [{
          path: ':id', component: PersonDetailComponent,
          data: {
            title: 'Person Detail',
            hasBackButton: true
          } as RouterData
        }, {
          path: ':personId/debt/edit/:debtId', component: DebtEditComponent,
          data: {
            title: 'Edit/Add Person Debt',
            hasBackButton: true
          } as RouterData
        }
        ]
      }
    ]
  }, {
    path: '', redirectTo: 'persons/list', pathMatch: 'full'
  }, {
    path: '**', redirectTo: 'persons/list'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DebtsRoutingModule {
}
