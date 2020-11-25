import { Component, OnInit } from '@angular/core';
import { MatchService, SoccerTeam } from 'src/app/service/match.service';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.page.html',
  styleUrls: ['./stats.page.scss'],
})
export class StatsPage implements OnInit {

  stats: SoccerTeam[] = [];

  constructor(private matchService: MatchService) { }

  ngOnInit() {
    this.getStats();
  }

  getStats() {
    this.stats = this.matchService.getTeamsStats();
  }

}
