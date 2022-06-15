import { MarvelActionTypes, Action } from "./marvel";
import MarvelChracter from "../../models/MarvelCharacterModel";
interface MarvelState {
  loading: boolean;
  error: string | null;
  heros: MarvelChracter[] | null;
}

const initialState = {
  loading: false,
  error: null,
  heros: [],
};

const reducer = (state: MarvelState = initialState, action: Action) => {
  switch (action.type) {
    case MarvelActionTypes.FETCH_MARVEL_HERO_CHARCTERS_BEGIN:
      return {
        ...state,
        loading: true,
      };
    case MarvelActionTypes.FETCH_MARVEL_HERO_CHARCTERS_SUCCESS:
      return {
        ...state,
        loading: false,
        heros: action.payload,
      };
    case MarvelActionTypes.FETCH_MARVEL_HERO_CHARCTERS_ERROR:
      return {
        ...state,
        error: action.err,
        loading: false,
      };
    default:
      return state;
  }
};
export default reducer;
