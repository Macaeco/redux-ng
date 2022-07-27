import {Action} from './ngrx-fake/ngnx'
import {decrementadorAction, dividirAction, incrementadorAction, multiplicarAction, resetAction} from './contador/contador.actions'
import { contadorReducer } from './contador/contador.reducer'



console.log ( contadorReducer(10, incrementadorAction))

console.log ( contadorReducer(10, decrementadorAction))

console.log ( contadorReducer(10, multiplicarAction))

console.log ( contadorReducer(10, dividirAction))

console.log( contadorReducer(10, resetAction))
