import {EventEmitter, Injectable} from "@angular/core";

@Injectable()
export class MService {
  public emitter: EventEmitter<string> = new EventEmitter<string>();
}
