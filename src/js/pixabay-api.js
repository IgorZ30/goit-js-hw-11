import axios from "axios";
export function getImagesByQuery(query) {
    const key = "54828579-b719dea7318382c6ddac3285f"
   return axios.get("https://pixabay.com/api/", {
        params: {
            key:key,
            q: query,
            image_type: "photo",
            orientation: "horizontal",
           safesearch: true
        }
    })
        .then(response => response.data.hits)
        .catch(error => {
            console.error(error)
            return []
         })
}