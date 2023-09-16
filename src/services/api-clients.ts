import axios from "axios";

export default axios.create({
    baseURL:'https://api.rawg.io/api',
    params:{
        key:'ee6b09352a7746a5a8c53d38d8851ffb'
    }
})