import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SuplidoresPage } from './suplidores';

@NgModule({
  declarations: [
    SuplidoresPage,
  ],
  imports: [
    IonicPageModule.forChild(SuplidoresPage),
  ],
})
export class SuplidoresPageModule {}
