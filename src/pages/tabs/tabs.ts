import { Component } from '@angular/core';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  tabs: Array<{ title: string; page: string; icon: string }> = [
    { title: 'Início', page: 'HomePage', icon: '' },
    { title: 'Palpite', page: 'HintPage', icon: '' },
    { title: 'Regulamento', page: 'RulesPage', icon: '' }
  ];

  constructor() {}
}
