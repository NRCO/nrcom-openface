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

// routes & components
import { routes } from './about.routes';
import { AboutComponent } from './about.component';

@NgModule({
  imports: [
    CommonModule,
    // TODO: ngx-i18n-router
    // I18NRouterModule.forChild(routes, 'about')
    RouterModule.forChild(routes),
    MaterialModule,
    SharedModule
  ],
  declarations: [
    AboutComponent
  ]
})
export class AboutModule {
}
