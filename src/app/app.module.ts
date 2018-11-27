import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DadosClientComponent } from './dados-client/dados-client.component';
import {DadosClientService} from './dados-client/dados-client.component.service';

@NgModule({
  declarations: [
    AppComponent,
    DadosClientComponent,
    DadosClientService
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
