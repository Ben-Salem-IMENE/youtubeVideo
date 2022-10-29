import axios from "axios";

const KEY = "AIzaSyDKlMXCis98HRWZLd9PBL9-wPu9KXcY-wU";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY,
  },
});
