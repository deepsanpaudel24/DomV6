import { MarvelActionTypes, actionTypesObj } from "./marvel";

const actions: actionTypesObj = {
  fetchMarvelHeroCharatersBegin: () => {
    return {
      type: MarvelActionTypes.FETCH_MARVEL_HERO_CHARCTERS_BEGIN,
    };
  },

  fetchMarvelHeroChractersSuccess: (payload) => {
    return {
      type: MarvelActionTypes.FETCH_MARVEL_HERO_CHARCTERS_SUCCESS,
      payload,
    };
  },

  fetchMarvelHeroChractersError: (err) => {
    return {
      type: MarvelActionTypes.FETCH_MARVEL_HERO_CHARCTERS_ERROR,
      err,
    };
  },
};

export default actions;
