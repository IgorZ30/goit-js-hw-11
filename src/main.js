import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import {getImagesByQuery} from "./js/pixabay-api.js";
import {createGallery} from "./js/render-functions.js";
import {clearGallery} from "./js/render-functions.js";
import {showLoader} from "./js/render-functions.js";
import {hideLoader} from "./js/render-functions.js";

const form = document.querySelector(".form")

form.addEventListener("submit",handleSubmit)

function handleSubmit(e){
    e.preventDefault()
    const query = form.elements["search-text"].value.trim() 
    if (query === "") {
        return;
    }
    clearGallery()
    showLoader()
        getImagesByQuery(query)
            .then(data => {
                hideLoader();
                if (data.length === 0) {
                    iziToast.error({
                    message: "Sorry, there are no images matching your search query. Please try again!",
                    position: "topRight"
                    })
                    return;
                }
                createGallery(data);
            })
}