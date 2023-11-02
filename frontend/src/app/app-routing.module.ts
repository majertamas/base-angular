import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MDropdownComponent } from './component/m-dropdown/m-dropdown.component';

const routes: Routes = [
  { path: 'dropdown', component: MDropdownComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
