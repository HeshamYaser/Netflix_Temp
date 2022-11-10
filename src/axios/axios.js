import axios from "axios" ;

const instancse = axios.create({
    baseURL: "http://api.themoviedb.org/3",
});

export default instancse ;