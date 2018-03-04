import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-form',
  template: `
      <p>app-form works and say {{ id }} !</p>
      <button (click)="sendId()">Send Id</button>
  `,
  styleUrls: ['./app-form.component.css']
})
export class AppFormComponent implements OnInit {

    /**
     *  Reçu par le parent
      * @type {number}
     */
  // @Input() id: number;
  // Variable
  protected id: number = 1234;
  protected newid: number = 5678;
  // Déclaration d'un event (@Output) avec d'un Custom event (EventEmitter) avec un nom idEvent.
  @Output() idEvent = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

    /**
     *   Envoye de la donnée vers le parent via un event.
     */
  sendId() {
      this.idEvent.emit(this.newid);
      // mise à jour de l'id au click
      this.id = this.newid;
  }

}
