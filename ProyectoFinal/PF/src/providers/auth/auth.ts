import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {AngularFireAuth} from 'angularfire2/auth';
import  * as firebase from 'firebase/app';

/*
  Generated class for the AuthProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthProvider {

  constructor(private afAuth : AngularFireAuth) {
    console.log('Hello AuthProvider Provider');
  }
  registerUser(email:string, password:string){
    return this.afAuth.auth.createUserWithEmailAndPassword( email, password)
    .then((res)=>{
     // El usuario se ha creado correctamente.
    })
    .catch(err=>Promise.reject(err))
 }
 loginUser(email:string, password:string){
  return this.afAuth.auth.signInWithEmailAndPassword(email, password)
    .then(user=>Promise.resolve(user))
    .catch(err=>Promise.reject(err))
}
get Session(){
  return this.afAuth.authState;
 }
 logout(){
  this.afAuth.auth.signOut().then(()=>{
    
  })
}
getUser(){
  return this.afAuth.auth.currentUser.uid;
}

}
