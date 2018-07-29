import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

/**
 * Generated class for the PftabsPage tabs.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pftabs',
  templateUrl: 'pftabs.html'
})
export class PftabsPage {

  inicioRoot = 'InicioPage'
  suplidoresRoot = 'SuplidoresPage'
  facturasRoot = 'FacturasPage'
  infoRoot = 'InfoPage'


  constructor(public navCtrl: NavController) {}

}
