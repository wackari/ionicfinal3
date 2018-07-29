import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ModalController } from 'ionic-angular';
import { FirebasedbProvider } from '../../providers/firebasedb/firebasedb';



/**
 * Generated class for the SuplidoresPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-suplidores',
  templateUrl: 'suplidores.html',
})
export class SuplidoresPage {

  suplidores: any;
  
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public modalCtrl : ModalController,
    public dbFirebase :FirebasedbProvider
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SuplidoresPage');
    
  }
  NuevoSuplidor(){
    // aquí vamos a abrir el modal para añadir nuestro sitio.

    let mimodal = this.modalCtrl.create( 'ModalNuevoSuplidorPage');
    mimodal.present();
   }
   ionViewDidEnter(){
     
    this.dbFirebase.getSuplidores().subscribe(suplidores=>{
      this.suplidores = suplidores;
      console.log(this.suplidores);
    })
console.log(this.suplidores);

}

}
