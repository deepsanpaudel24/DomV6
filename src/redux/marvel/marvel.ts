import MarvelChracter from "../../models/MarvelCharacterModel";

export enum MarvelActionTypes {
  FETCH_MARVEL_HERO_CHARCTERS_BEGIN = "FETCH_MARVEL_HERO_CHRACTERS_BEGIN",
  FETCH_MARVEL_HERO_CHARCTERS_SUCCESS = "FETCH_MARVEL_HERO_CHRACTERS_SUCCESS",
  FETCH_MARVEL_HERO_CHARCTERS_ERROR = "FETCH_MARVEL_HERO_CHRACTERS_ERROR",
}

export interface fetchMarvelHeroCharatersBegin {
  type: MarvelActionTypes.FETCH_MARVEL_HERO_CHARCTERS_BEGIN;
}
export interface fetchMarvelHeroChractersSuccess {
  type: MarvelActionTypes.FETCH_MARVEL_HERO_CHARCTERS_SUCCESS;
  payload: MarvelChracter[];
}
export interface fetchMarvelHeroChractersError {
  type: MarvelActionTypes.FETCH_MARVEL_HERO_CHARCTERS_ERROR;
  err: string;
}

export interface actionTypesObj {
  fetchMarvelHeroCharatersBegin: () => fetchMarvelHeroCharatersBegin;
  fetchMarvelHeroChractersSuccess: (
    payload: MarvelChracter[]
  ) => fetchMarvelHeroChractersSuccess;
  fetchMarvelHeroChractersError: (err: string) => fetchMarvelHeroChractersError;
}

export type Action =
  | fetchMarvelHeroCharatersBegin
  | fetchMarvelHeroChractersSuccess
  | fetchMarvelHeroChractersError;
