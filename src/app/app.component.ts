import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
      Parent received a id called {{ id }}
      <app-form (idEvent)="receiveId($event)"></app-form>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    constructor() {}

    /**
     * Donnée appelé par le parent.
     * @type {number}
     */
    id: number = 1234;

    ngOnInit() {
    }

    /**
     *
     * @param $event
     */
    receiveId($event) {
        this.id = $event;
    }
}
