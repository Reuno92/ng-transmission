import { Component, OnInit, ViewChild } from '@angular/core';
import { AppFormComponent } from './app-form/app-form.component'

@Component({
  selector: 'app-root',
  template: `
      Parent received a id called {{ id }}
      <app-form (idEvent)="receiveId($event)"></app-form>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

    @ViewChild(AppFormComponent) child;

    constructor() {}

    /**
     * Donnée appelé par le parent.
     * @type {number}
     */
    id: number = 1324;

    /**
     *   A l'initialisation de l'app
     */
    ngOnInit() {
        this.getNewId();
    }

    /**
     *   Retourne le nouvel Id
     */
    getNewId() {
        return this.id = this.child.id;
    }
    /**
     * reçoit l'id
     * @param $event
     */
    receiveId($event) {
        return this.id = $event;
    }
}
