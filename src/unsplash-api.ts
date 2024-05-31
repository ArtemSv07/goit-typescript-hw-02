import axios from "axios";
import { ImageData } from "./types";

axios.defaults.baseURL = "https://api.unsplash.com/";

export const getPictures = async (
  query: string,
  page: number
): Promise<ImageData[]> => {
  const response = await axios.get("search/photos", {
    params: {
      query,
      page,
      orientation: "landscape",
      per_page: 9,
    },
    headers: {
      Authorization: "Client-ID x0dZahGJ780HDTKnQObmZRWZ8eBwx-PcX5Bokc6NxHU",
      "Accept-Version": "v1",
    },
  });

  return response.data.results;
};
