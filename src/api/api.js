import axios from "axios";

export default axios.create({
    baseURL:'http://localhost:4041/orders'
})