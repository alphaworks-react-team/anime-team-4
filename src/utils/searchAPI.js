import axios from "axios";

const CategoryRequest = (inputValue) => {
  return new Promise(async (resolve, reject) => {
    try {
      const request = axios.get(
        `https://kitsu.io/api/edge/anime?filter[text]=${inputValue}`
      );
      console.log("Search ===>", request);
      resolve(request);
    } catch (err) {
      reject(err);
    }
  });
};


export default CategoryRequest;