import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController } from 'ionic-angular';
import { DgiiProvider } from '../../providers/dgii/dgii';
import { FirebasedbProvider } from '../../providers/firebasedb/firebasedb';

/**
 * Generated class for the ModalNuevoSuplidorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modal-nuevo-suplidor',
  templateUrl: 'modal-nuevo-suplidor.html',
})
export class ModalNuevoSuplidorPage {
  RNC="";
 
  contribuyente: {
    RGE_NOMBRE: string;
  } = 
  {
    RGE_NOMBRE:  "323232323232323"
  }

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
  public dgiiServices: DgiiProvider,
  private viewCtrl : ViewController,
  private dbFirebase :FirebasedbProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalNuevoSuplidorPage');
  }
  validar()
  {
  /* this.dgiiServices.validate(this.RNC)
    .subscribe(
      (data) => { // Success
       // this.data.push(data);
        this.contribuyente = data;
      },
      (error) =>{
        console.error(error);
      }
    )*/
  }
  cerrarModal(){
    this.viewCtrl.dismiss();
  }
Guardar(){

  let suplidor = 
  {
    RNC: this.RNC,
    Nombre: this.contribuyente.RGE_NOMBRE
  }
  this.dbFirebase.guardarsuplidor(suplidor).then(res=>{
    console.log('Sitio guardado en firebase:');
    this.cerrarModal();
})
}
    


}
