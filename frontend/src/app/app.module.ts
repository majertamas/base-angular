import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
import { MDropdownComponent } from './component/m-dropdown/m-dropdown.component';
import {MService} from "./service/m-service";
import { TesztComponent } from './component/teszt/teszt.component';
import { ContainerComponent } from './component/container/container.component';
import {ButtonModule} from "primeng/button";
import {RippleModule} from "primeng/ripple";

@NgModule({
  declarations: [
    AppComponent,
    MDropdownComponent,
    TesztComponent,
    ContainerComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    InputTextModule,
    DropdownModule,
    FormsModule,
    ButtonModule,
    RippleModule
  ],
  providers: [
    MService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
