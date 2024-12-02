'use strict'

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

import { fetchData } from "./js/pixabay-api.js";
import { showToastError, createMarkup } from "./js/render-functions.js";

const API_KEY = "47390664-00e9f6e051e23aada86cf3665";
const BASE_URL = "https://pixabay.com/api/";

let searchParams = new URLSearchParams ({
    key: API_KEY,
    image_type: "photo",
    orientation: "horizontal",
    safesearch: true,
});

const form = document.querySelector(".form");
const loading = document.querySelector(".loading-container");
const gallery = document.querySelector(".gallery");
const galleryLightbox = new SimpleLightbox('.gallery a', {
    captionDelay: 250,
    captionType: 'attr',
    captionsData: 'alt',
    captionPosition: 'bottom'
});

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
    event.preventDefault();

    searchParams.set("q", event.target.elements.search.value);
    fillInGallery([]);
    showLoading();

    fetchData(`${BASE_URL}?${searchParams}`)
        .then(result => {
            if (!result.hits.length) {
                fillInGallery([]);
                showToastError("Sorry, there are no images matching your search query. Please try again!");
                return;
            }

            fillInGallery(result.hits);
        })
        .catch(error => showToastError(error.message))
        .finally(() => {
            hideLoading();
        })
    
    form.reset();
}

function fillInGallery(array) {
    gallery.innerHTML = createMarkup(array);
    galleryLightbox.refresh();
}

function showLoading() {
    loading.style.display = "flex";
}

function hideLoading() {
    loading.style.display = "none";
}
