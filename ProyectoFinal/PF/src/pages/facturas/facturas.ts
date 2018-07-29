import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ModalController } from 'ionic-angular';
import { FirebasedbProvider } from '../../providers/firebasedb/firebasedb';

/**
 * Generated class for the FacturasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-facturas',
  templateUrl: 'facturas.html',
})
export class FacturasPage {
facturas: any;
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public modalCtrl : ModalController,
    public dbFirebase :FirebasedbProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FacturasPage');
  }
  nuevaFactura(){
   
     let mimodal = this.modalCtrl.create( 'ModalAgregarFacturaPage');
     mimodal.present();
  }
  ionViewDidEnter(){
     
    this.dbFirebase.getactuas().subscribe(facturas=>{
      this.facturas = facturas;
      console.log(this.facturas);
    })
console.log(this.facturas);

}

muestraFactura(factura){
  let modalfactura = this.modalCtrl.create( 'ModalDetalleFacturaPage', factura );
  modalfactura.present();
}

}
