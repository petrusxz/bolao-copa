import { Component, ViewChild } from '@angular/core';

import { NavController, Nav } from 'ionic-angular';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: NavController;
  
  rootPage: any = 'HomePage';
  pages: Array<{ title: string; root: string; icon: string }> = [
    { title: 'Resultados', root: 'HomePage', icon: 'ios-list' },
    { title: 'Palpites', root: 'HintPage', icon: 'ios-football' },
    { title: 'Regulamento', root: 'RulesPage', icon: 'ios-paper' }
  ];

  constructor() {}
}
