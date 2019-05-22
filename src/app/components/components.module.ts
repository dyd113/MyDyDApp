import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { CommentboxComponent } from './commentbox/commentbox.component';

@NgModule({
  imports: [
    CommonModule,
    IonicModule.forRoot(),
  ],
  declarations: [
    CommentboxComponent
  ],
  exports: [
    CommentboxComponent
  ],
  entryComponents: [],
})
export class ComponentsModule {}