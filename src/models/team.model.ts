export class TeamModel {
  id: string = null;
  name: string = null;
  icon: string = null;
  points: number = 0;
  wons: number = 0;
  drawns: number = 0;
  losts: number = 0;
  gf: number = 0;
  ga: number = 0;
  gd: number = 0;

  constructor(values: Object = {}) {
    Object.keys(this).forEach(key => {
      if (values.hasOwnProperty(key)) this[key] = values[key];
    });
  }
}
