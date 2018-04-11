import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HintPage } from './hint';

@NgModule({
  declarations: [
    HintPage,
  ],
  imports: [
    IonicPageModule.forChild(HintPage),
  ],
})
export class HintPageModule {}
