import { Component } from '@angular/core';

@Component({
  selector: 'm-dropdown',
  templateUrl: './m-dropdown.component.html',
  styleUrls: ['./m-dropdown.component.scss']
})
export class MDropdownComponent {
  options: string[] =['a', 'b', 'c'];
  selectedOption: string = 'a';


  onChange(event: any) {
    console.log(event.value);
  }

}
