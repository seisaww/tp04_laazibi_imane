import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Pollution } from '../../models/pollution.model';
import { PollutionService } from '../../services/pollution.service';
import { CommonModule, DatePipe} from '@angular/common';
import { PollutionFrom } from '../pollution-form/pollution-from';

@Component({
  selector: 'app-pollution-detail',
  standalone: true,
  imports: [CommonModule, DatePipe, RouterModule, PollutionFrom],
  templateUrl: './pollution-detail.html',
  styleUrl: './pollution-detail.css'
})

export class PollutionDetail implements OnInit {
  pollution: Pollution | null = null ;
  pollutionToEdit: Pollution | null = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private pollutionService: PollutionService
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.loadPollution(id);
    }
  }

loadPollution(id : string): void {
  this.pollutionService.getPollutionById(id).subscribe({
    next: (data: Pollution) => this.pollution = data, 
    error: (error: any) => {
      console.error('Erreur:', error)
      this.pollution = null;
    }
  });

  }
  
editPollution(): void {
  if (this.pollution){ // si c'est pas null on edit
    this.pollutionToEdit = {...this.pollution}
  }
    
  }
  
cancelEdit(): void {
  this.pollutionToEdit = null;
}
  
handlePollutionUpdated(updatedPollution: Pollution): void {
  this.pollution = updatedPollution;
  this.cancelEdit();

  alert('Pollution {$updatePollution.titre} modifié avec succès ! ');
  }

deletePollution(): void {
  if (this.pollution && confirm('Êtes-vous sûr de vouloir supprimer cette pollution ?')) {
  this.pollutionService.deletePollution(this.pollution.id).subscribe({
    next: () => {
          alert('Pollution supprimée avec succès !');
          this.router.navigate(['pollutions/liste']);
        },
      error: (error) => console.error('Erreur suppression:', error)
    });
    }
  }
}
