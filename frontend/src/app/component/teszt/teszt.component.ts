import {Component, OnInit} from '@angular/core';
import {MService} from "../../service/m-service";

@Component({
  selector: 'app-teszt',
  templateUrl: './teszt.component.html',
  styleUrls: ['./teszt.component.scss']
})
export class TesztComponent implements OnInit {

  public message: string | null = null;
  public buttonMessage: string | null = null;

  constructor(private mService: MService) {
  }

  // todo EVELIN
  //  így hol jó, hol nem
  //  mindig jó, ha gorsan klikkelsz :)
  //  néha jó, néha nem, ha lenyomva tartod, hol az egyik, hol a másik szöveg jelenik meg
  //  Bognár Andrást megkérdeztem, mi lehet a gond, ő az EventEmitterre gyanakodott,
  //  hátha valami életciklusos dolog kavar be,
  //  javasolta helyette a Subject-et, de az sem oldotta meg a problémát

  public ngOnInit(): void {

    this.mService.subject.subscribe((message: string) => {
      console.log('megjött a message - - -')
      this.message = message;
    });

    document.getElementById('button')!
      .addEventListener('mousedown', (): void => {
        console.log('mousedown - - -')
        this.onButtonClick();
      });

  }

  public onButtonClick(): void {
    console.log('button clicked - - -')
    this.buttonMessage = 'button clicked';
  }
}
