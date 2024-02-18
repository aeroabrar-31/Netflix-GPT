import OpenAI from "openai";

export const netflix_logo =
  "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";

export const netflix_bg_img =
  "https://maven-uploads.s3.amazonaws.com/120386748/projects/netflix%20image.jpg";

export const user_avatar =
  "https://avatars.githubusercontent.com/u/106985034?v=4";

export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMGE4ZWQzYTZjNmQyYzZiNjhlOTA5NTMwOGJiZTVhOSIsInN1YiI6IjY1Yzg3YjE5M2MzYWIwMDE2M2NlNzgzOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.zQLpKx2gPKnYFoJHwdHej_7agdV9z9HZ2LLzwlmHzEA",
  },
};

export const POSTER_IMG_URL = "https://image.tmdb.org/t/p/w200";

export const openAI = new OpenAI({
  apiKey: process.env.REACT_APP_OPENAI_KEY,
  dangerouslyAllowBrowser: true, // This is the default and can be omitted
});
