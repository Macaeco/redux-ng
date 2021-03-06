import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//nx
import { StoreModule } from '@ngrx/store'; 
import { contadorReducer } from './contador/contador.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HijoComponent } from './contador/hijo/hijo.component';
import { NietoComponent } from './contador/nieto/nieto.component';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    HijoComponent,
    NietoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({ contador: contadorReducer }), 
    StoreDevtoolsModule.instrument({
      maxAge: 25, 
      logOnly: environment.production,
      autoPause: true
    })],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
