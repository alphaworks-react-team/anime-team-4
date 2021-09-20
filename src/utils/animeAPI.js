import axios from "axios";

const utils = {
  AnimeTrending: () => {
    return new Promise(async (resolve, reject) => {
      try {
        const request = await axios.get(
          "https://kitsu.io/api/edge/trending/anime"
        );
        resolve(request.data.data);
      } catch (err) {
        reject(err);
      }
    });
  },
  SearchAPI: (inputValue) => {
    return new Promise(async (resolve, reject) => {
      try {
        const request = await axios.get(
          `https://kitsu.io/api/edge/anime?filter[text]=${inputValue}`
        );
        console.log("Search ===>", request.data);
        resolve(request.data.data);
      } catch (err) {
        reject(err);
      }
    });
  },
};

export default utils;
