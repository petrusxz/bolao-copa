import { Component, Input } from '@angular/core';
import { TeamModel } from '../../models/team.model';
import { MatchModel } from '../../models/match.model';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'matches-card',
  templateUrl: 'matches-card.html'
})
export class MatchesCardComponent {

  grupoA: MatchModel[];
  grupoB: MatchModel[];
  grupoC: MatchModel[];
  grupoD: MatchModel[];
  grupoE: MatchModel[];
  grupoF: MatchModel[];
  grupoG: MatchModel[];
  grupoH: MatchModel[];

  groups: Array<{name: string, matches: MatchModel[]}> = [];

  // @Input() teams: Observable<TeamModel[]>;
  // @Input() matches: Observable<MatchModel[]>;
  @Input() teams: Observable<TeamModel>;
  @Input() matches: Observable<MatchModel>;
  @Input() readonly: boolean;

  constructor() {
  }
  

  ionViewDidLoad(){
    // this.matches.subscribe((resp) => {
    //   resp.forEach(e =>  {
    //     if (!this.groups.find(el => el.name === e.group)) {
    //       resp.filter(el => el.group == 'Grupo A')
    //     }
    //       this.groups.push()
    //   });
    // });

    // this.grupoA = this.matches.filter(el => el.group == 'Grupo A')
    // console.log('this.grupoA ' + this.grupoA);
    // this.grupoB = this.matches.filter(el => el.group == 'Grupo B')
    // console.log('this.grupoB ' + this.grupoB);
    // this.grupoC = this.matches.filter(el => el.group == 'Grupo C')
    // console.log('this.grupoC ' + this.grupoC);
    // this.grupoD = this.matches.filter(el => el.group == 'Grupo D')
    // console.log('this.grupoD ' + this.grupoD);
    // this.grupoE = this.matches.filter(el => el.group == 'Grupo E')
    // console.log('this.grupoE ' + this.grupoE);
    // this.grupoF = this.matches.filter(el => el.group == 'Grupo F')
    // console.log('this.grupoF ' + this.grupoF);
    // this.grupoG = this.matches.filter(el => el.group == 'Grupo G')
    // console.log('this.grupoG ' + this.grupoG);
    // this.grupoH = this.matches.filter(el => el.group == 'Grupo H')
    // console.log('this.grupoH ' + this.grupoH);   
    // console.log(this.matches);
    
    
    this.matches.forEach(element => {
      switch (element.group) {
        case 'Grupo A':
          this.grupoA.push(element);
          break;
        case 'Grupo B':
          this.grupoB.push(element);
          break;
        case 'Grupo C':
          this.grupoC.push(element);
          break;
        case 'Grupo D':
          this.grupoD.push(element);
          break;
        case 'Grupo E':
          this.grupoE.push(element);
          break;
        case 'Grupo F':
          this.grupoF.push(element);
          break;
        case 'Grupo G':
          this.grupoG.push(element);
          break;
        case 'Grupo H':
          this.grupoH.push(element);
          break;
      
        default:
          break;
      }
      console.log(this.grupoA);
    });
    console.log(this.grupoA);
  }

}
