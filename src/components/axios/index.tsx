import MarvelChracter from "../../models/MarvelCharacterModel";
import axios from "./axios";

export const get = async (url: string) => {
  try {
    const { data } = await axios.get<MarvelChracter[]>(url);
    return { data, success: true };
  } catch (error: any) {
    return { data: error.message, success: false };
  }
};
