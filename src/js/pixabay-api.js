import axios from "axios";
import iziToast from "izitoast";

const API_KEY = "48746428-ca8ddb89bc4c4cb9194f35bec";
const BASE_URL = "https://pixabay.com/api/";

export async function fetchImages(query) {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        key: API_KEY,
        q: query,
        image_type: "photo",
        orientation: "horizontal",
        safesearch: true,
      },
    });

    if (response.data.hits.length === 0) {
      throw new Error("Sorry, there are no images matching your search query. Please try again!");
    }

    return response.data.hits;
  } catch (error) {
    iziToast.error({
      title: "Error",
      message: error.message || "Something went wrong. Please try again!",
      position: "topRight",
    });
    console.error("Error fetching images:", error);
    throw error;
  }
}