import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Pour @if, @for et les pipes
import { PollutionService } from '../../services/pollution.service';
import { Pollution } from '../../models/pollution.model';
import { Output, EventEmitter } from '@angular/core';
import { PollutionFrom } from '../pollution-form/pollution-from'; 
import { Routes } from '@angular/router';
import { RouterOutlet, RouterModule } from '@angular/router';
import { provideRouter } from '@angular/router'; 


@Component({
  selector: 'app-header',
  imports: [RouterModule, CommonModule],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {

}
