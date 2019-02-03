import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AccountingComponent} from './components/accounting/accounting.component';

const routes: Routes = [
  {path: '', component: AccountingComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountingRoutingModule {
}
