import { NgModule } from '@angular/core';
import { SearchComponent } from './search/search.component';
import {NavComponent} from './nav.component'

@NgModule({
  declarations: [NavComponent, SearchComponent],
  imports: [],
  exports: [NavComponent],
})
export class NavModule {}