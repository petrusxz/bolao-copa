export class HintModel {
  id: string = null;
  userId: string = null;
  matchId: string = null;
  creationDate: Date = null;
  lastChangeDate: Date = null;
  points: number = 0;

  constructor(values: Object = {}) {
    Object.keys(this).forEach(key => {
      if (values.hasOwnProperty(key)) this[key] = values[key];
    });
  }
}
