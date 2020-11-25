import { Injectable } from '@angular/core';

export interface SoccerTeam {
  team_name: string;
  goals: number;
  yellow_cards: number;
  red_cards: number;
  offsides: number;
  match_status: string;
}

@Injectable({
  providedIn: 'root'
})
export class MatchService {

  Teams: SoccerTeam[] = [];

  constructor() { }

  setTeams(teamA, teamB) {
    this.Teams.push({'team_name': teamA, 'goals': 0, 'yellow_cards': 0, 'red_cards': 0, 'offsides': 0, 'match_status': 'in-progress'});
    this.Teams.push({'team_name': teamB, 'goals': 0, 'yellow_cards': 0, 'red_cards': 0, 'offsides': 0, 'match_status': 'in-progress'});

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

  // FIX THE LOGIC !!!!
  finishMatch() {
    let max_goals = 0;
    for (let current_team in this.Teams) {
      if (this.Teams[current_team]['goals'] > max_goals) {
          max_goals = this.Teams[current_team]['goals'];
          this.Teams[current_team]['match_status'] = 'won';
      } else if(this.Teams[current_team]['goals'] == max_goals) {
          this.Teams[current_team]['match_status'] === 'draw';
      } else {
          this.Teams[current_team]['match_status'] = 'lost';
      }
    }
    console.log(this.Teams);
  }

  getWinner() {
    for (let current_team in this.Teams) {
      if (this.Teams[current_team]['match_status'] == 'won') {
        return this.Teams[current_team]['team_name'];
      } else if (this.Teams[current_team]['match_status'] == 'draw') {
        return this.Teams;
      } 
    }
    console.log(this.Teams);
  }

}
