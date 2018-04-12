import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { TeamModel } from '../../models/team.model';
import {
  AngularFirestoreCollection,
  AngularFirestore
} from 'angularfire2/firestore';
import { MatchModel } from '../../models/match.model';
import { Observable } from 'rxjs/Observable';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  private teamsCollection: AngularFirestoreCollection<TeamModel>;
  private matchesCollection: AngularFirestoreCollection<MatchModel>;
  teams: Observable<TeamModel[]>;
  matches: Observable<MatchModel[]>;

  constructor(private afs: AngularFirestore) {}

  ionViewDidLoad(): void {
    this.teamsCollection = this.afs.collection<TeamModel>('teams');
    this.teams = this.teamsCollection.valueChanges();
    this.matchesCollection = this.afs.collection<MatchModel>('matches');
    this.matches = this.matchesCollection.valueChanges();
    
    console.log(this.teams);
    console.log(this.matches);
  }

  // saveTeam() {
  //   this.team.id = this.afs.createId();

  //   this.teamsCollection = this.afs.collection<TeamModel>('teams');
  //   this.teamsCollection
  //     .doc(this.team.id)
  //     .set(Object.assign({}, this.team))
  //     .then(() => {
  //       console.log('Item added.');
  //       this.team = new TeamModel();
  //     });
  // }

  // saveMatch() {
  //   this.match.id = this.afs.createId();

  //   this.matchesCollection = this.afs.collection<MatchModel>('matches');
  //   this.matchesCollection
  //     .doc(this.match.id)
  //     .set(Object.assign({}, this.match))
  //     .then(() => {
  //       console.log('Item added.');
  //       this.match = new MatchModel();
  //     });
  // }
}
