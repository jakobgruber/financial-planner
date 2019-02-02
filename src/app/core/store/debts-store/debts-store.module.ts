import {NgModule} from '@angular/core';
import {StoreModule} from '@ngrx/store';
import {debtsReducer} from './reducers/debts.reducer';

@NgModule({
  imports: [
    StoreModule.forFeature('debts', debtsReducer)
  ]
})
export class DebtsStoreModule {
}
