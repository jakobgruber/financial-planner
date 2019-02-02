import { NgModule } from '@angular/core';
import { PersonListComponent } from './components/persons/person-list/person-list.component';
import {SharedModule} from '../../shared/shared.module';
import {DebtsRoutingModule} from './debts-routing.module';
import { PersonEditComponent } from './components/persons/person-edit/person-edit.component';
import { PersonDetailComponent } from './components/persons/person-detail/person-detail.component';

@NgModule({
  imports: [
    SharedModule,
    DebtsRoutingModule
  ],
  declarations: [PersonListComponent, PersonEditComponent, PersonDetailComponent]
})
export class DebtsModule { }
