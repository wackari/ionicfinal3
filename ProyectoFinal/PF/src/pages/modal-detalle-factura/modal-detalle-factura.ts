import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams ,ViewController} from 'ionic-angular';


/**
 * Generated class for the ModalDetalleFacturaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modal-detalle-factura',
  templateUrl: 'modal-detalle-factura.html',
})
export class ModalDetalleFacturaPage {
factura: any;
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private viewCtrl : ViewController) {
      this.factura = this.navParams.data;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalDetalleFacturaPage');
  }
  cerrarModal(){
    this.viewCtrl.dismiss();
  }
}
