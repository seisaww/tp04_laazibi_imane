import { Component, OnInit } from '@angular/core'; // 1. Importer OnInit
import { CommonModule } from '@angular/common'; 
import { RouterModule } from '@angular/router'; // J'ai gardé celui-ci
import { Utilisateur } from '../../models/utilisateur.model';
import { UserService } from '../../services/utilisateur.service';

@Component({
  selector: 'app-inscription-list',
  standalone: true, 
  imports: [CommonModule, RouterModule],
  templateUrl: './inscription-list.html',
  styleUrl: './inscription-list.css'
})
export class InscriptionList implements OnInit {
  utilisateurs: Utilisateur[] = [];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.loadUtilisateur();
  }

  loadUtilisateur(): void {
    this.userService.getUsers().subscribe({
      next: (data) => {
        this.utilisateurs = data;
        },
      error: (error) => console.error('Erreur de chargement:', error)
    });
  }

}