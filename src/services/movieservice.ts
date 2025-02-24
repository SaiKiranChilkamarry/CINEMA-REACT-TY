import axios from "axios";

// Correct way to access API key in Vite
const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";

console.log("API Key:", API_KEY); // Debugging: Check if API key loads correctly

export const fetchMovies = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/movie/popular`, {
      params: { api_key: API_KEY }, // Pass API key correctly
    });

    return response.data.results;
  } catch (error) {
    console.error("Error fetching movies:", error);
    return [];
  }
};
export default fetchMovies;
