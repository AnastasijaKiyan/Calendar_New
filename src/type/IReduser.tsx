import { Reducer } from "redux";
import { IAction } from './IAction';
import { IState } from './IState';

export interface IReducer extends Reducer {
  (state: IState, action: IAction): IState;
}