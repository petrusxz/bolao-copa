import { NgModule } from '@angular/core';
import { MatchesCardComponent } from './matches-card/matches-card';
import { IonicModule, IonicApp } from 'ionic-angular';

@NgModule({
  declarations: [MatchesCardComponent],
  imports: [IonicModule],
  bootstrap: [IonicApp],
  exports: [MatchesCardComponent]
})
export class ComponentsModule {}
