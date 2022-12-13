import axios from "axios";

axios.defaults.baseURL = "http://localhost:3000/";

const testApi = async () => {
  const response = await axios.get("/test");
  return response.data;
};

export default testApi;
