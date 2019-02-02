import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PersonListComponent} from './components/persons/person-list/person-list.component';
import {PersonEditComponent} from './components/persons/person-edit/person-edit.component';

const routes: Routes = [
  {path: '', component: PersonListComponent},
  {path: 'person/edit/:id', component: PersonEditComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DebtsRoutingModule {
}
