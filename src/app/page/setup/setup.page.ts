import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatchService } from 'src/app/service/match.service';

@Component({
  selector: 'app-setup',
  templateUrl: './setup.page.html',
  styleUrls: ['./setup.page.scss'],
})
export class SetupPage implements OnInit {

  teamA; 
  teamB;

  constructor(
    private matchService: MatchService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  setTeams() {
    this.matchService.setTeams(this.teamA, this.teamB);
    this.router.navigate(['match']);
  }

}
