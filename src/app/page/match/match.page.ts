import { Component, OnInit } from '@angular/core';
import { MatchService } from 'src/app/service/match.service';

@Component({
  selector: 'app-match',
  templateUrl: './match.page.html',
  styleUrls: ['./match.page.scss'],
})
export class MatchPage implements OnInit {

  constructor(private matchService: MatchService) { }

  ngOnInit() {
  }

  setTeams(teamA, teamB) {
    this.matchService.setTeams(teamA, teamB);
  }

  addGoal(team) {
    this.matchService.addGoal(team);
  }

  deleteGoal(team) {
    this.matchService.deleteGoal(team);
  }

  yellowCard(team) {
    this.matchService.giveYellowCard(team);
  }

  redCard(team) {
    this.matchService.giveRedCard(team);
  }

  offSide(team) {
    this.matchService.giveOffside(team);
  }

  reset() {
    //ADD alert confirmation !!!!
    this.matchService.finishMatch();
    this.matchService.getWinner();
  }

}
