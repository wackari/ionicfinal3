import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the DgiiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DgiiProvider {

  constructor(public http: HttpClient) {
    console.log('Hello DgiiProvider Provider');
  }
  validate(a)
  {
    return this.http.get('http://adamix.net/gastosrd/api.php?act=GetContribuyentes&rnc='+a);
  }
}
