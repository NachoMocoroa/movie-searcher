import thunkMiddleware from "redux-thunk";
import { createStore, applyMiddleware } from "redux";
import reducer from "./reducer";
//@ts-ignore
export const store = createStore(reducer, applyMiddleware(thunkMiddleware));
export type AppDispatch = typeof store.dispatch;