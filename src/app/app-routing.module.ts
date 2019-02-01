import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';


const routes: Routes = [
  { path: '', redirectTo: 'debts', pathMatch: 'full' },
  { path: 'debts', loadChildren: './features/debts/debts.module#DebtsModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
