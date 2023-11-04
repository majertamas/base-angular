import {Component} from '@angular/core';
import {MService} from "../../service/m-service";

@Component({
  selector: 'm-dropdown',
  templateUrl: './m-dropdown.component.html',
  styleUrls: ['./m-dropdown.component.scss']
})
export class MDropdownComponent {

  public options: string[] = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i'];
  public selectedValue: string | null = null;
  public mouseOnLi: boolean = false;

  constructor(private mService: MService) {
  }

  public onShow(): void {
    let lis: HTMLLIElement[] = Array.from(document.getElementsByTagName('li'));
    lis.forEach(li => {
      li.addEventListener('mouseenter', (): void => {
        this.mouseOnLi = true;
      });
      li.addEventListener('mouseout', (): void => {
        this.mouseOnLi = false;
      });
    });
  }

  public onHide(): void {
    this.mouseOnLi = false;
    let lis: HTMLLIElement[] = Array.from(document.getElementsByTagName('li'));
    lis.forEach(li => {
      li.removeEventListener('mouseenter', (): void => {
      });
      li.removeEventListener('mouseout', (): void => {
      });
    });
  }

  public onBlur(): void {
    if (!this.mouseOnLi) {
      this.mService.emitter.emit('service message');
    }
  }

}
