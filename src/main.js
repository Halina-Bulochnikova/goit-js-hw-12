import { fetchImages } from "./js/pixabay-api.js";
import { renderImages } from "./js/render-functions.js";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

document.addEventListener("DOMContentLoaded", () => {
  const searchForm = document.querySelector("#search-form");
  const loader = document.querySelector(".loader");
  const gallery = document.querySelector(".gallery");

  searchForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const query = searchForm.elements.searchQuery.value.trim();
    if (!query) {
      iziToast.warning({
        title: "Warning",
        message: "Please enter a search term!",
        position: "topRight",
      });
      return;
    }

    loader.style.display = "block";
    gallery.innerHTML = "";

    try {
      const images = await fetchImages(query);
      renderImages(images);
    } catch (error) {
      
      loader.style.display = "none";
      return;
    }

    loader.style.display = "none";
  });
});