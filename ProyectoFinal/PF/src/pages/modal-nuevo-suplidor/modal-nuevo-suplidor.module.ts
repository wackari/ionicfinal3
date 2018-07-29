import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ModalNuevoSuplidorPage } from './modal-nuevo-suplidor';

@NgModule({
  declarations: [
    ModalNuevoSuplidorPage,
  ],
  imports: [
    IonicPageModule.forChild(ModalNuevoSuplidorPage),
  ],
})
export class ModalNuevoSuplidorPageModule {}
