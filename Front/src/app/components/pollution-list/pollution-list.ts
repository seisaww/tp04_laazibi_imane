import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PollutionService } from '../../services/pollution.service';
import { Pollution } from '../../models/pollution.model';

import { PollutionFrom } from '../pollution-form/pollution-from'; 
import { Routes } from '@angular/router';
import { RouterOutlet, RouterModule } from '@angular/router';
import { provideRouter } from '@angular/router'; 

@Component({
  selector: 'app-liste-pollutions',
  imports: [CommonModule, RouterModule], 
  templateUrl: './pollution-list.html',
  styleUrl: './pollution-list.css'
})

export class PollutionList implements OnInit {
  pollutions: Pollution[] = [];
  filteredPollutions: Pollution[] = [];
  filterCriteria = {
    type: '', 
    lieu: '',
    date: ''
  };

constructor(private pollutionService: PollutionService) { }

ngOnInit(): void {
  this.loadPollutions(); 
}

loadPollutions(): void {
  this.pollutionService.getPollutions().subscribe({
    next: (data) => {
        this.pollutions = data;
        this.applyFilters(); 
      },
    error: (error) => console.error('Erreur de chargement:', error)
  });
}

applyFilters(): void {
  this.filteredPollutions = this.pollutions.filter(pollution => {
    const typeMatch = !this.filterCriteria.type || pollution.type_pollution === this.filterCriteria.type;
    const lieuMatch = !this.filterCriteria.lieu || 
    pollution.lieu.toLowerCase().includes(this.filterCriteria.lieu.toLowerCase());
    const dateMatch = !this.filterCriteria.date || pollution.date_observation === this.filterCriteria.date;

    return typeMatch && lieuMatch && dateMatch;
  });
}

handleFilterChange(key: 'type' | 'lieu' | 'date', event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement; 
    this.filterCriteria[key] = target.value;
    this.applyFilters();
  }
}
