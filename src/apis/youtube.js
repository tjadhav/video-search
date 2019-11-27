import axios from "axios";

const KEY = "AIzaSyBcw6jqpc-ig79hxw3ODWBdzDqg2uGbaRM";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: "5",
    key: KEY
  }
});
