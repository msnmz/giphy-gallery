import axios from 'axios';
import { limitPerRequest } from "./constants";

export async function getImages(searchText, offset) {
  try {
    const response = await axios.get('https://api.giphy.com/v1/gifs/search', {
      params: {
        api_key: process.env.REACT_APP_GIPHY_API, // Required: API KEY
        q: searchText, // Required: Search query term or phrase
        limit: limitPerRequest, // Optional: The maximum number of objects to return (Default: “25”)
        offset, // Optional: Specifies the starting position of the results (Defaults to 0)
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error (giphy/getImages):', error.message);
    throw new Error('Error occurred while trying to load images!');
  }
}