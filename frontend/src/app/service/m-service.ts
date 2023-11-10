import {Injectable} from "@angular/core";
import {Subject} from "rxjs";

@Injectable()
export class MService {
  public subject: Subject<string> = new Subject<string>();
}
