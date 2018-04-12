import { Component, Input } from '@angular/core';
import { TeamModel } from '../../models/team.model';
import { MatchModel } from '../../models/match.model';

@Component({
  selector: 'matches-card',
  templateUrl: 'matches-card.html'
})
export class MatchesCardComponent {

  @Input() teams: TeamModel[];
  @Input() matches: MatchModel[];
  @Input() readonly: boolean;

  constructor() {}

}
