import React, { useEffect } from "react";
import { useTypedSelector as useSelector } from "../../hooks/useTypedSelector";
import { getAllHeroCharacters } from "../../redux/marvel/actionCreator";
import { useAppDispatch as useDispatch } from "../../hooks/useTypedDispatch";

const HomePage = () => {
  const dispatch = useDispatch();
  const { loading, error, heros } = useSelector((state) => state.marvel);
  useEffect(() => {
    if (!heros.length) {
      dispatch(getAllHeroCharacters());
    }
  }, []);

  console.log({ heros });
  return <div>HomePage</div>;
};

export default HomePage;
