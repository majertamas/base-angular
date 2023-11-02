import { AfterContentChecked, Component, OnInit } from '@angular/core';

@Component({
  selector: 'm-dropdown',
  templateUrl: './m-dropdown.component.html',
  styleUrls: ['./m-dropdown.component.scss']
})
export class MDropdownComponent implements AfterContentChecked {

  options = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i'];
  selectedValue = null;
  mouseOnLi: boolean = false;

  ngAfterContentChecked() {
  }

  onShow() {
    let lis = Array.from(document.getElementsByTagName('li'));
    lis.forEach(li => {
      li.addEventListener('mouseenter', () => {
        this.mouseOnLi = true;
      });
      li.addEventListener('mouseout', () => {
        this.mouseOnLi = false;
      });
    });
  }

  onHide() {
    this.mouseOnLi = false;
  }

  onBlur() {
    if (this.mouseOnLi) {
      console.log('nem kell hibaüzi');
    } else {
      console.log('kell hibaüzi');
    }
  }

}
