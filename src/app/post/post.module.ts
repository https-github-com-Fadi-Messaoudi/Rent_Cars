import { NgModule } from '@angular/core';
import { PostComponent } from './post.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [PostComponent],
  imports: [FormsModule],
  exports: [PostComponent],
})
export class PostModule {}