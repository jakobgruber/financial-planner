import { NgModule } from '@angular/core';
import { BudgetsComponent } from './components/budgets/budgets.component';
import {SharedModule} from '../../shared/shared.module';
import {BudgetsRoutingComponent} from './budgets-routing.component';

/*
    todo - implement me
 */

@NgModule({
  declarations: [BudgetsComponent],
  imports: [
    SharedModule,
    BudgetsRoutingComponent
  ]
})
export class BudgetsModule { }
