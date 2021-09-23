import axios from "axios";

const utils = {
  AnimeTrending: () => {
    return new Promise(async (resolve, reject) => {
      try {
        const request = await axios.get(
          "https://kitsu.io/api/edge/trending/anime?[limit]=100&page[offset]=0"
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
  CategoryAPI: () => {
    return new Promise(async (resolve, reject) => {
      try {
        const request = await axios.get(
          `https://kitsu.io/api/edge/categories?page[limit]=229`
        );
        const allCategoryArr = request.data.data;
        const mainCategory = allCategoryArr.filter((category) => {
          return category.attributes.childCount > 3;
        });
        resolve(mainCategory);
      } catch (err) {
        reject(err);
      }
    });
  },

  ItemsInCategory: (id, offset) => {
    return new Promise(async (resolve, reject) => {
      try {
        const request = await axios.get(
          `https://kitsu.io/api/edge/categories/${id}/anime?page[limit]=10&page[offset]=${offset}`
        );
        resolve(request.data.data);
      } catch (err) {
        reject(err);
      }
    });
  },

  AnimeByID: (id) => {
    return new Promise(async (resolve, reject) => {
      try {
        const request = await axios.get(
          `https://kitsu.io/api/edge/anime/${id}`
        );
        resolve(request.data.data);
      } catch (err) {
        reject(err);
      }
    });
  },

  getAnimeGenresById: (id) => {
    return new Promise(async (resolve, reject) => {
      try {
        const request = await axios.get(`
        https://kitsu.io/api/edge/anime/${id}/genres/?page[limit]=20
        `);
        resolve(request.data.data);
      } catch (err) {
        reject(err);
      }
    });
  },
  getAnimeCategoriesById: (id) => {
    return new Promise(async (resolve, reject) => {
      try {
        const request = await axios.get(`
        https://kitsu.io/api/edge/anime/${id}/categories/?page[limit]=20`);
        resolve(request.data.data);
      } catch (err) {
        reject(err);
      }
    });
  },
};
// hello

export default utils;
