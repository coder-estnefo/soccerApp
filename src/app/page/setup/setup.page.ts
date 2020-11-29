import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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

  teamsForm: FormGroup;

  constructor(
    private matchService: MatchService,
    private router: Router,
    public alertController: AlertController,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.teamsForm = this.formBuilder.group({
      teamA: ['', Validators.required],
      teamB: ['', Validators.required]
    });
  }

  setTeams(form) {
    let teamA = form.value.teamA;
    let teamB = form.value.teamB;
    this.matchService.setTeams(teamA, teamB);
    this.router.navigate(['match']);
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
