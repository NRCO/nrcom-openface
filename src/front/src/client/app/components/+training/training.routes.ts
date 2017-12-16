// angular
import { Routes } from '@angular/router';

// components
import { TrainingComponent } from './training.component';

export const routes: Routes = [
  {
    path: '',
    component: TrainingComponent,
    data: {
      meta: {
        title: 'PUBLIC.TRAINING.PAGE_TITLE',
        description: 'PUBLIC.TRAINING.META_DESCRIPTION'
      }
    }
  }
];
