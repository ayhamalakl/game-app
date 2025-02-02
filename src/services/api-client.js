import axios from "axios";

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: "17ced9f3392b4a1eb0ace8b4268db9b4",
    },
});
