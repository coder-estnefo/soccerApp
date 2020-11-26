import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
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
    private router: Router,
    public alertController: AlertController
  ) { }

  ngOnInit() {
  }

  setTeams() {
    if (this.teamA != '' && this.teamB != '') {
      this.matchService.setTeams(this.teamA, this.teamB);
      this.router.navigate(['match']);
    } else {
      this.presentAlert();
    }
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: 'Subtitle',
      message: 'Enter values for Team A and Team B',
      buttons: ['OK']
    });

    await alert.present();
  }

}
