import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ModalDetalleFacturaPage } from './modal-detalle-factura';

@NgModule({
  declarations: [
    ModalDetalleFacturaPage,
  ],
  imports: [
    IonicPageModule.forChild(ModalDetalleFacturaPage),
  ],
})
export class ModalDetalleFacturaPageModule {}
