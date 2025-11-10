import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PollutionList } from './components/pollution-list/pollution-list';
import { PollutionRecap } from './components/pollution-recap/pollution-recap';
import { PollutionFrom } from './components/pollution-form/pollution-from';
import { Pollution } from './models/pollution.model';
import { RouterOutlet, RouterModule } from '@angular/router';
import { Header } from './components/header/header';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, RouterModule, Header],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class AppComponent {
  pollutionAEditer: Pollution | null = null;
  lastPollution: Pollution | null = null;

  @ViewChild('pollutionListComponent') pollutionListComponent!: PollutionList;

  onEditPollution(pollution: Pollution): void {
    this.pollutionAEditer = { ...pollution };
  }

  onPollutionSauvegardee(pollution: Pollution): void {
    this.lastPollution = pollution;
    this.pollutionAEditer = null;
    this.pollutionListComponent.loadPollutions();
  }

  onCancelEdit(): void {
    this.pollutionAEditer = null;
  }
}
