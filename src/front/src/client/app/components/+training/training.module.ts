// angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// libs
// TODO: ngx-i18n-router
// import { I18NRouterModule } from '@ngx-i18n-router/core';

// framework
import { SharedModule } from '../../framework/core/shared.module';
import { MaterialModule } from '../../framework/material/material.module';
import { MatTabsModule } from '@angular/material';

// routes & components
import { routes } from './training.routes';
import { TrainingComponent } from './training.component';

@NgModule({
  imports: [
    CommonModule,
    // TODO: ngx-i18n-router
    // I18NRouterModule.forChild(routes, 'training')
    RouterModule.forChild(routes),
    MaterialModule,
    MatTabsModule,
    SharedModule
  ],
  declarations: [
    TrainingComponent
  ]
})
export class TrainingModule {
}
