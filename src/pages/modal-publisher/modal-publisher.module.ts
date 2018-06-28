import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ModalPublisherPage } from './modal-publisher';

@NgModule({
  declarations: [
    ModalPublisherPage,
  ],
  imports: [
    IonicPageModule.forChild(ModalPublisherPage),
  ],
})
export class ModalPublisherPageModule {}
