import { Injectable } from '@angular/core';

export interface SoccerTeam {
  team_name: string;
  goals: number;
  yellow_cards: number;
  red_cards: number;
  offsides: number;
}

@Injectable({
  providedIn: 'root'
})
export class MatchService {

  Teams: SoccerTeam[] = [];
  stats;
  results;

  constructor() { }

  setTeams(teamA, teamB) {
    if (this.Teams.length > 0) {
        this.Teams = [];
        this.Teams.push({'team_name': teamA, 'goals': 0, 'yellow_cards': 0, 'red_cards': 0, 'offsides': 0});
        this.Teams.push({'team_name': teamB, 'goals': 0, 'yellow_cards': 0, 'red_cards': 0, 'offsides': 0});
    } else {
        this.Teams.push({'team_name': teamA, 'goals': 0, 'yellow_cards': 0, 'red_cards': 0, 'offsides': 0});
        this.Teams.push({'team_name': teamB, 'goals': 0, 'yellow_cards': 0, 'red_cards': 0, 'offsides': 0});
    }
    console.log(this.Teams);
  }

  getTeamsStats() {
    return this.Teams;
  } 

  addGoal(team) {
    for (let current_team in this.Teams) {
      if (this.Teams[current_team]['team_name'] == team) {
        this.Teams[current_team]['goals'] += 1;
      }
    }
    console.log(this.Teams);
  }

  deleteGoal(team) {
    for (let current_team in this.Teams) {
      if (this.Teams[current_team]['team_name'] == team) {
        if ( this.Teams[current_team]['goals'] > 0) {
          this.Teams[current_team]['goals'] -= 1;
        }
      }
    }
    console.log(this.Teams);
  }

  giveYellowCard(team) {
    for (let current_team in this.Teams) {
      if (this.Teams[current_team]['team_name'] == team) {
        this.Teams[current_team]['yellow_cards'] += 1;
      }
    }
    console.log(this.Teams);
  }

  giveRedCard(team) {
    for (let current_team in this.Teams) {
      if (this.Teams[current_team]['team_name'] == team) {
        this.Teams[current_team]['red_cards'] += 1;
      }
    }
    console.log(this.Teams);
  }

  giveOffside(team) {
    for (let current_team in this.Teams) {
      if (this.Teams[current_team]['team_name'] == team) {
        this.Teams[current_team]['offsides'] += 1;
      }
    }
    console.log(this.Teams);
  }

  finishMatch() {
    if(this.Teams.length > 0){
      this.stats = this.Teams; 
    
      if (this.Teams[0]['goals'] > this.Teams[1]['goals']) {
          this.results = [this.Teams[0]['team_name']];
      } else if (this.Teams[0]['goals'] == this.Teams[1]['goals']) {
          this.results = [this.Teams[0]['team_name'], this.Teams[1]['team_name']];
      }
    }
  }

  getWinner() {
    if(this.Teams.length > 0){
      if (this.results.length == 1) {
          //return this.results[0];
          return 'Winner: ' + this.results[0];
      } else {
          return 'Draw: ' + this.results[0] + ', ' + this.results[1];
      }
    }
  }

}
