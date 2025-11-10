import { Routes } from '@angular/router';
import { PollutionList } from './components/pollution-list/pollution-list'; 
import { PollutionDetail } from './components/pollution-detail/pollution-detail';
import { PollutionsHome } from './pollutions/pollutions-home/pollutions-home'; 
import { Inscription } from './components/inscription/inscription';
import { InscriptionList } from './components/inscription-list/inscription-list'; 

export const routes: Routes = [{ 
    path: '', 
    component: PollutionsHome
  },
  
  { 
    path: 'pollutions/liste', 
    loadComponent : () => import('./components/pollution-list/pollution-list').then(c => c.PollutionList)
  },

  { 
    path: 'pollutions/formulaire', 
    loadComponent : () => import('./components/pollution-form/pollution-from').then(c => c.PollutionFrom)
  }, 

  { 
    path : 'pollutions/detail/:id',
    loadComponent : () => import('./components/pollution-detail/pollution-detail').then(c => c.PollutionDetail)
  },

  { 
    path : 'inscription',
    loadComponent : () => import('./components/inscription/inscription').then(c => c.Inscription)
  },

  { 
    path : 'inscription-list',
    loadComponent : () => import('./components/inscription-list/inscription-list').then(c => c.InscriptionList)
  }
  
];


