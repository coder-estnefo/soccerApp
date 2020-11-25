import { Component, OnInit } from '@angular/core';
import { MatchService } from 'src/app/service/match.service';

@Component({
  selector: 'app-setup',
  templateUrl: './setup.page.html',
  styleUrls: ['./setup.page.scss'],
})
export class SetupPage implements OnInit {

  constructor(private matchService: MatchService) { }

  ngOnInit() {
  }

  setTeams(teamA, teamB) {
    this.matchService.setTeams(teamA, teamB);
  }

}
