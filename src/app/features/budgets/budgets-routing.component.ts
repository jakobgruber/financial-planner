import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BudgetsComponent} from './components/budgets/budgets.component';

const routes: Routes = [
  {path: '', component: BudgetsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BudgetsRoutingComponent {
}
