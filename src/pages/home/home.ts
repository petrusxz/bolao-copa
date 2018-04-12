import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { TeamModel } from '../../models/team.model';
import {
  AngularFirestoreCollection,
  AngularFirestore
} from 'angularfire2/firestore';
import { MatchModel } from '../../models/match.model';
import { Observable } from '@firebase/util';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  private team: TeamModel = new TeamModel();
  private teamsCollection: AngularFirestoreCollection<TeamModel>;
  private match: MatchModel = new MatchModel();
  private matchesCollection: AngularFirestoreCollection<MatchModel>;
  teams: Observable<TeamModel[]>;
  matches: Observable<MatchModel[]>;

  teamCtrl = [];
  constructor(private afs: AngularFirestore) {
    this.teamsCollection = this.afs.collection<TeamModel>('teams');
    // this.teams = this.teamsCollection.valueChanges();
  }

  saveTeam() {
    this.team.id = this.afs.createId();

    this.teamsCollection = this.afs.collection<TeamModel>('teams');
    this.teamsCollection
      .doc(this.team.id)
      .set(Object.assign({}, this.team))
      .then(() => {
        console.log('Item added.');
        this.teamCtrl.push(this.team);
        console.log(this.team.name + ' = ' + this.team.id);
        this.team = new TeamModel();
      });
  }

  saveMatch() {
    this.match.id = this.afs.createId();

    this.matchesCollection = this.afs.collection<MatchModel>('matches');
    this.matchesCollection
      .doc(this.match.id)
      .set(Object.assign({}, this.match))
      .then(() => {
        console.log('Item added.');
        this.match = new MatchModel();
      });
  }
}
