import React, { useEffect } from "react";
import HomeMenu from "../HomePageMenu";
import { useSelector, useDispatch } from "react-redux";
import { getListMovieAction } from "../../../../redux/actions/ListMovieAction";
import MultipleRow from "../../../../components/Rslick/MultipleRow";

export default function HomePage() {
  const { arrListMovie } = useSelector((state) => state.ListMovieReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getListMovieAction());
  }, []);

  // const renderListMovie = () => {
  //   return arrListMovie.map((item, index) => {
  //     console.log(item);
  //     return (

  //     );
  //   });
  // };
  return (
    <div className="container mx-auto ">
      <section className="text-gray-600 body-font  ">
        <div className="container px-5 py-24 mx-auto max-w-[80vw]  ">
          <MultipleRow arrFilm={arrListMovie} />
        </div>
      </section>

      <HomeMenu />
    </div>
  );
}
