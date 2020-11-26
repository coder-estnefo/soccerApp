import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';
import { MatchService } from 'src/app/service/match.service';

@Component({
  selector: 'app-match',
  templateUrl: './match.page.html',
  styleUrls: ['./match.page.scss'],
})
export class MatchPage implements OnInit {

  match;

  constructor(
    private matchService: MatchService,
    public toastController: ToastController,
    public alertController: AlertController,
    private router: Router
  ) { }

  ngOnInit() {
    this.getDetails();
  }

  getDetails() {
    this.match = this.matchService.getTeamsStats();
  }

  setTeams(teamA, teamB) {
    this.matchService.setTeams(teamA, teamB);
  }

  addGoal(team) {
    this.matchService.addGoal(team);
    let message = 'Goal for ' + team;
    this.presentToast(message);
  }

  deleteGoal(team) {
    this.matchService.deleteGoal(team);
    let message = 'Goal Reversal for ' + team;
    this.presentToast(message);
  }

  yellowCard(team) {
    this.matchService.giveYellowCard(team);
    let message = 'Yellow Card for ' + team;
    this.presentToast(message);
  }

  redCard(team) {
    this.matchService.giveRedCard(team);
    let message = 'Red Card for ' + team;
    this.presentToast(message);
  }

  offSide(team) {
    this.matchService.giveOffside(team);
    let message = 'Offside for ' + team;
    this.presentToast(message);
  }

  reset() {
    this.presentAlertConfirm();
  }

  async presentToast(msg) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000
    });
    toast.present();
  }

  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      header: 'Confirm!',
      message: 'Are you sure you want to reset the match ?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
        }, {
          text: 'Okay',
          handler: () => {
            this.confirmedReset();
          }
        }
      ]
    });

    await alert.present();
  }

  async showResults(results) {
    const alert = await this.alertController.create({
      header: 'Match Results',
      message: results,
      buttons: [
        {
          text: 'View Stats',
          handler: () => {
            this.router.navigate(['stats']);
          }
        }
      ]
    });

    await alert.present();
  }

  confirmedReset() {
    this.matchService.finishMatch();
    let rs = this.matchService.getWinner();
    this.showResults(rs);
    // this.router.navigate(['stats']);
  }

  stats() {
    this.router.navigate(['stats']);
  }

}
