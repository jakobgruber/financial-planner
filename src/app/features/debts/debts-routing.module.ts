import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PersonListComponent} from './components/persons/person-list/person-list.component';

const routes: Routes = [
  { path: '', component: PersonListComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)]
})
export class DebtsRoutingModule { }
