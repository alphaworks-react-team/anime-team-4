import axios from "axios";

const AnimeTrending = () => {
  return new Promise(async (resolve, reject)=> {
    try{
      const request = axios.get(
        "https://kitsu.io/api/edge/anime?trending"
      );
      console.log("TRENDING API ===>" , request)
      resolve(request);
    } catch (err) {
      reject(err)
    }
  })
}


export default AnimeTrending;