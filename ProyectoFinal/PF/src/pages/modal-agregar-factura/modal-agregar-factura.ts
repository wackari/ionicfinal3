import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController } from 'ionic-angular';
import { FirebasedbProvider } from '../../providers/firebasedb/firebasedb';
import { Camera, CameraOptions } from '@ionic-native/camera';

/**
 * Generated class for the ModalAgregarFacturaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modal-agregar-factura',
  templateUrl: 'modal-agregar-factura.html',
})
export class ModalAgregarFacturaPage {

  suplidores: any;


    suplidor: string;
    foto: any;
    factura: string;
    nfc: string;
    fecha:  any;
    itebis: string;
    concepto: string;
    total: string;

  constructor(
    public navCtrl: NavController,
     public navParams: NavParams,
    private viewCtrl : ViewController,
    private dbFirebase : FirebasedbProvider,
    private camera: Camera
  
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalAgregarFacturaPage');
  }
  cerrarModal(){
    this.viewCtrl.dismiss();
  }
  ionViewDidEnter(){
     
    this.dbFirebase.getSuplidores().subscribe(suplidores=>{
      this.suplidores = suplidores;
      console.log(this.suplidores);
    })
console.log(this.suplidores);
}
sacarFoto(){

  let cameraOptions : CameraOptions = {
      quality: 50,
      encodingType: this.camera.EncodingType.JPEG,
      targetWidth: 800,
      targetHeight: 600,
      destinationType: this.camera.DestinationType.DATA_URL,
      sourceType: this.camera.PictureSourceType.CAMERA,
      correctOrientation: true
  }


  this.camera.getPicture(cameraOptions).then((imageData) => {
    // imageData is a base64 encoded string
      this.foto = "data:image/jpeg;base64," + imageData;
  }, (err) => {
      console.log(err);
  });
}
Guardar()
{
  let Factura = 
  {
    suplidor: this.suplidor,
    foto: "demo",
    factura: this.factura,
    nfc: this.nfc,
    fecha: this.fecha,
    itebis: this.itebis,
    concepto: this.concepto,
    total: this.total,
  }
  this.dbFirebase.guardarFactuas(Factura).then(res=>{
    console.log('Sitio guardado en firebase:');
    this.cerrarModal();
})
}
}
