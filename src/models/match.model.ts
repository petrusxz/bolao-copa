export class MatchModel {
  id: string = null;
  idTeam1: string = null;
  idTeam2: string = null;
  team1: string = null;
  team2: string = null;
  group: string = null;
  score1: number = null;
  score2: number = null;
  team1Points: number = null;
  team2Points: number = null;
  team1Wons: number = null;
  team2Wons: number = null;
  team1Drawns: number = null;
  team2Drawns: number = null;
  team1Losts: number = null;
  team2Losts: number = null;

  constructor(values: Object = {}) {
    Object.keys(this).forEach(key => {
      if (values.hasOwnProperty(key)) this[key] = values[key];
    });
  }
}
