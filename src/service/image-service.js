import axios from "axios";

const API_KEY = "sV3yq4soqRLxBTb1rpsX90iahrskzM24JqG4PX2EwYHGhfaGozUhqoj6";
axios.defaults.baseURL = "https://api.pexels.com/v1/";
axios.defaults.headers.common["Authorization"] = API_KEY;
axios.defaults.params = {
  orientation: "landscape",
  per_page: 15,
};

export const getImages = async (query, page) => {
  return await axios(`search?query=${query}&page=${page}`);
};
