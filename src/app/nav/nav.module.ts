import { NgModule } from '@angular/core';
import { SearchComponent } from './search/search.component';
import {NavComponent} from './nav.component'
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [NavComponent, SearchComponent],
  imports: [FormsModule],
  exports: [NavComponent],
})
export class NavModule {}