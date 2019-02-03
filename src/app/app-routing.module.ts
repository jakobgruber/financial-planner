import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';

const routes: Routes = [
  { path: 'dashboard', loadChildren: './features/dashboard/dashboard.module#DashboardModule'},
  { path: 'debts', loadChildren: './features/debts/debts.module#DebtsModule'},
  { path: 'accounting', loadChildren: './features/accounting/accounting.module#AccountingModule'},
  { path: 'budgets', loadChildren: './features/budgets/budgets.module#BudgetsModule'},
  { path: '', redirectTo: 'debts', pathMatch: 'full' },
  { path: '**', redirectTo: 'debts' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
