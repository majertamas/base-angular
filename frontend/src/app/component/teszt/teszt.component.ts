import { Component } from '@angular/core';
import {MService} from "../../service/m-service";

@Component({
  selector: 'app-teszt',
  templateUrl: './teszt.component.html',
  styleUrls: ['./teszt.component.scss']
})
export class TesztComponent {

  public message: string | null = null;
  public buttonMessage: string | null = null;

  constructor(private mService: MService) {
    this.mService.emitter.subscribe((message: string) => {
      this.message = message;
    });
  }

  public onButtonClick(): void {
    this.buttonMessage = 'button clicked';
  }
}
