import { NgModule } from '@angular/core';
import { AccountingComponent } from './components/accounting/accounting.component';
import {SharedModule} from '../../shared/shared.module';
import {AccountingRoutingModule} from './accounting-routing.module';

/*
    todo - implement me
 */

@NgModule({
  declarations: [AccountingComponent],
  imports: [
    SharedModule,
    AccountingRoutingModule
  ]
})
export class AccountingModule { }
