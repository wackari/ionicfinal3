import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList} from 'angularfire2/database';
import { AuthProvider } from '../auth/auth';
import 'rxjs/add/operator/map';
import { LoginPage } from '../../pages/login/login';

/*
  Generated class for the FirebasedbProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FirebasedbProvider {
  constructor(public afDB: AngularFireDatabase, public auth: AuthProvider) {
    console.log('Hello FirebaseDbProvider Provider');
  }
 

  guardarsuplidor(suplidor){
    suplidor.id  = Date.now();
    return this.afDB.database.ref('Suplidor/'+this.auth.getUser()+'/'+suplidor.id).set(suplidor)
 }
 getSuplidores(){
  return this.afDB.list('Suplidor/'+this.auth.getUser()).valueChanges();

}
guardarFactuas(factura){
  factura.id  = Date.now();
  return this.afDB.database.ref('Factura/'+this.auth.getUser()+'/'+factura.id).set(factura)
}
getactuas(){
return this.afDB.list('Factura/'+this.auth.getUser()).valueChanges();
}
}
