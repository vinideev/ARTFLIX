import axios from "axios";

// base URL https://api.themoviedb.org/3/
// https://api.themoviedb.org/3/movie/550?api_key=22c78580d3bef99db15ed7775c9bc663

const api = axios.create ({
    baseURL:'https://api.themoviedb.org/3/'
})

export default api;

