import { NgModule } from '@angular/core';
import { PersonListComponent } from './components/persons/person-list/person-list.component';
import {SharedModule} from '../../shared/shared.module';
import {DebtsRoutingModule} from './debts-routing.module';

@NgModule({
  imports: [
    SharedModule,
    DebtsRoutingModule
  ],
  declarations: [PersonListComponent]
})
export class DebtsModule { }
