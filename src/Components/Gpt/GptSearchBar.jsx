import React, { useRef } from "react";
import { langConst } from "../../utils/langConstants";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS, openAI } from "../../utils/constants";
import { addMovieNames, addMovies } from "../../utils/Slices/suggestionsSlice";
import { LoadingButton } from "@mui/lab";
import { Search } from "@mui/icons-material";

const GptSearchBar = () => {
  const langKey = useSelector((store) => store?.language?.lang);
  const dispatch = useDispatch();
  console.log(langKey);
  const searchText = useRef();

  const handleSearch = () => {
    console.log(searchText.current.value);
    main(searchText.current.value);
  };

  async function main(msg) {
    const gptQuery =
      "Act as movie recommendation system, give 10 movie suggestions and only give me names of the movies in comma separated values for " +
      msg +
      " like the example: Hera Pheri, God Father, Spider Man, Oppenheimer, Marvels etc.";

    const chatCompletion = await openAI.chat.completions.create({
      messages: [
        {
          role: "user",
          content: gptQuery,
        },
      ],
      model: "gpt-3.5-turbo",
    });
    console.log(chatCompletion.choices[0].message.content);

    const moviesString = chatCompletion.choices[0].message.content;
    const movieArray = moviesString.split(", ");
    console.log(movieArray);

    let cleanedMoviesList = movieArray.map(function (movie) {
      return movie.replace(/\d+\.\s+/g, "").replace(/\n/g, "");
    });

    console.log("====================================");
    console.log(cleanedMoviesList);
    console.log("====================================");
    const promisearray = cleanedMoviesList.map((movie) => {
      return fetchMovieDetails(movie);
    });
    fullfillPromises(promisearray);

    dispatch(addMovieNames(movieArray));
  }

  const fetchMovieDetails = async (moviename) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" + moviename,
      API_OPTIONS
    );

    const jsondata = await data.json();

    // console.log("====================================");
    // console.log(jsondata);
    // console.log("====================================");
    return jsondata.results;
  };

  const fullfillPromises = async (prom) => {
    const res = await Promise.all(prom);
    console.log(res);

    let actualResult = [];

    for (let index = 0; index < res.length; index++) {
      const element = res[index];

      for (let j = 0; j < element.length; j++) {
        actualResult.push(element[j]);
      }
    }

    actualResult = res.map((mov) => mov[0]);
    console.log(actualResult);

    dispatch(addMovies(actualResult));
  };

  return (
    <div className="relative  pt-[7%] flex justify-center">
      <form
        className="bg-black w-[98%] md:w-1/2 grid grid-cols-12 bg-opacity-60 rounded-xl"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          className=" px-4 py-2 m-4 col-span-9 rounded-md"
          type="text"
          placeholder={langConst[langKey].placeholder}
          ref={searchText}
        />
        {/* <div className="col-span-3">
          <LoadingButton
            loading={true}
            loadingPosition="start"
            startIcon={<Search />}
            variant="contained"
            sx={{ marginLeft: 4, marginTop: "19px", padding: "8px 23px" }}
            color="error"
          >
            Search
          </LoadingButton>
        </div> */}
        <button
          onClick={handleSearch}
          className="bg-red-600 hover:bg-red-700 md:text-lg text-sm col-span-3 rounded-md text-white md:px-4 py-1 px-3  m-4"
        >
          {langConst[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
