import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ModalAgregarFacturaPage } from './modal-agregar-factura';

@NgModule({
  declarations: [
    ModalAgregarFacturaPage,
  ],
  imports: [
    IonicPageModule.forChild(ModalAgregarFacturaPage),
  ],
})
export class ModalAgregarFacturaPageModule {}
