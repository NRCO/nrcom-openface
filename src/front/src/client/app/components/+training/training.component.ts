// angular
import { Component } from '@angular/core';

// app
import { routeAnimation } from '../../app.animations';

@Component({
  templateUrl: './training.component.html',
  styleUrls: ['training.component.scss'],
  animations: [routeAnimation]
})
export class TrainingComponent {
    constructor() {
        console.log(this);
    }
}
