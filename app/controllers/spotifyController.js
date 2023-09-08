import dotenv from "dotenv";
import axios from "axios";
import querystring from "querystring";

dotenv.config();

const client_id = `${process.env.CLIENT_ID}`;
const client_secret = `${process.env.CLIENT_SECRET}`;
const callbackUri = "https://adriangaitan.engineer/";

const getAccessToken = async () => {
  const authOptions = {
    url: "https://accounts.spotify.com/api/token",
    method: "post",
    params: {
      grant_type: "client_credentials",
    },
    headers: {
      Authorization: `Basic ${Buffer.from(
        `${client_id}:${client_secret}`
      ).toString("base64")}`,
    },
  };

  const response = await axios(authOptions);
  return response.data.access_token;
};


export default getAccessToken;
