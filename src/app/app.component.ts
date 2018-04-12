import { Component, ViewChild, ElementRef } from '@angular/core';

import { NavController, Nav } from 'ionic-angular';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: NavController;
  @ViewChild('fabCtrl', {read: ElementRef}) fabCtrl: ElementRef;
  
  rootPage: any = 'HomePage';
  pages: Array<{ title: string; root: string; icon: string }> = [
    { title: 'Resultados', root: 'HomePage', icon: 'ios-list' },
    { title: 'Palpites', root: 'HintPage', icon: 'ios-football' },
    { title: 'Regulamento', root: 'RulesPage', icon: 'ios-paper' }
  ];

  constructor() {}

  navigate(page: string): void {
    if (this.nav.canGoBack())
      this.nav.pop();
      
    this.nav.push(page)
      .then(() => this.fabCtrl.nativeElement.click());
  }
}
