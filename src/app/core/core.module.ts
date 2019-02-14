import { NgModule } from '@angular/core';
import {RootStoreModule} from './store/root-store.module';
import {RouterModule} from '@angular/router';
import {SharedModule} from '../shared/shared.module';
import {coreComponents} from './components';

@NgModule({
  imports: [
    RootStoreModule,
    RouterModule,
    SharedModule
  ],
  declarations: [...coreComponents],
  exports: [...coreComponents]
})
export class CoreModule { }
