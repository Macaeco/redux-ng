import { incrementadorAction } from "./contador/contador.actions";
import { contadorReducer } from "./contador/contador.reducer";
import { Action, Reducer } from "./ngrx-fake/ngnx";





class Store<I>{
    // private state: I ;
    constructor( private reducer: Reducer<I>, 
         private state: I ){
    }

    getState(){
        return this.state;
    }

    disparch (action: Action){
        this.state = this.reducer(this.state, action)

    }
}

const store = new Store (contadorReducer,10)
console.log(store.getState())
store.disparch(incrementadorAction)
store.disparch(incrementadorAction)

console.log(store.getState())