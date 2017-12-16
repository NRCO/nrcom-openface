// angular
import { Routes } from '@angular/router';

// libs
import { MetaGuard } from '@ngx-meta/core';

// components
import { MainComponent } from './components/layout';

import { ChangeLanguageComponent } from './framework/i18n/i18n.module';

export const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: '',
        loadChildren: './components/+home/home.module#HomeModule'
      },
      {
        path: 'training',
        loadChildren: './components/+training/training.module#TrainingModule'
      },
      {
        path: 'about',
        loadChildren: './components/+about/about.module#AboutModule'
      }
    ],
    canActivateChild: [MetaGuard],
    data: {
      i18n: {
        isRoot: true
      }
    }
  },
  {
    path: 'change-language/:languageCode',
    component: ChangeLanguageComponent
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];
