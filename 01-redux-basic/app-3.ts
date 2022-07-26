import { contadorReducer } from "./contador/contador.reducer";
import { Reducer } from "./ngrx-fake/ngnx";





class Store<I>{
    // private state: I ;
    constructor( private reducer: Reducer<I>, 
         private state: I ){
    }

    getState(){
        return this.state
    }
}

const store = new Store (contadorReducer,10)
console.log(store.getState())