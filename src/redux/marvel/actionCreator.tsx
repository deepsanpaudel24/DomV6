import actions from "./actions";
import { Dispatch } from "redux";
import { Action } from "./marvel";
import { get } from "../../components/axios";

const {
  fetchMarvelHeroCharatersBegin,
  fetchMarvelHeroChractersSuccess,
  fetchMarvelHeroChractersError,
} = actions;

const getAllHeroCharacters = () => {
  return async (dispatch: Dispatch<Action>) => {
    try {
      dispatch(fetchMarvelHeroCharatersBegin());
      const { success, data } = await get("/heros");
      if (success) dispatch(fetchMarvelHeroChractersSuccess(data));
      else dispatch(fetchMarvelHeroChractersError(data));
    } catch (err) {}
  };
};
