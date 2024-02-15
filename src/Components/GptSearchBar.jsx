import React, { useRef } from "react";
import { langConst } from "../utils/langConstants";
import { useDispatch, useSelector } from "react-redux";
import { openAI } from "../utils/constants";
import { addMovies } from "../utils/suggestionsSlice";
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
      "Act as movie recommendation system and give 10 movie suggestions for " +
      msg +
      " and only give me names of the movies in comma separated values like the example: Hera Pheri, God Father, Spider Man, Oppenheimer, Marvels etc.";

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

    dispatch(addMovies(movieArray));
  }

  return (
    <div className="relative  pt-[6%] flex justify-center">
      <form
        className="bg-black w-1/2 grid grid-cols-12 bg-opacity-60 rounded-xl"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          className="px-4 py-2 m-4 col-span-9 rounded-md"
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
          className="bg-red-600 text-lg col-span-3 rounded-md text-white px-4 py-1 m-4"
        >
          <Search /> {langConst[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
