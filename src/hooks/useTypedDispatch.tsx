import { TypedUseSelectorHook, useDispatch } from "react-redux";
import { RootState } from "../redux/rootReducer";
import { ThunkDispatch } from "redux-thunk";
import store from "../redux/store";

type AppAction = ReturnType<typeof store.dispatch>;
export type AppDispatch = ThunkDispatch<RootState, any, AppAction>;
export const useAppDispatch = () => useDispatch<AppDispatch>();
