import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ModalCardPage } from './modal-card';

@NgModule({
  declarations: [
    ModalCardPage,
  ],
  imports: [
    IonicPageModule.forChild(ModalCardPage),
  ],
})
export class ModalCardPageModule {}
