import { createStore, Store, Reducer, Action } from "redux";
import { IState } from "../type/IState";

interface IAction extends Action { }

interface IReducer extends Reducer {
   (state: IState, action: IAction): IState;
}

const initialState: IState = { };

const reducer: IReducer = (state: IState | undefined = initialState, action: IAction): IState => {
   let result: IState = { 
   }
   return result;
}

export const store: Store<IState> = createStore(reducer);

