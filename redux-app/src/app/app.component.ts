import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
interface AppState {
  contador: number
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'redux-app';

  contador: number ; 



  constructor( private store: Store<AppState> ){
    this.contador =10 
  }

  incrementar (){
    this.contador ++
  }

  decrementar (){
    this.contador --

  }
}
