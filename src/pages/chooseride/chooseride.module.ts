import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChooseridePage } from './chooseride';

@NgModule({
  declarations: [
    ChooseridePage,
  ],
  imports: [
    IonicPageModule.forChild(ChooseridePage),
  ],
})
export class ChooseridePageModule {}
