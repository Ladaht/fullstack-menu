import axios from "axios";
const BASE_API_URL = "http://localhost:5000";

/* 
  json-server will give you CRUD endpoints on snacks and drinks.
  Here we've provided you with a single action to get all drinks.

  You'll need to add to this class as you build features for the app.
*/

class SnackOrBoozeApi {
   
  static async getMenu(type) { // we need argument here
    console.log(type);
    const result = await axios.get(`${BASE_API_URL}/${type}`); // we need template literaal for argunent choice here
   // const result = await axios.get(`${BASE_API_URL}/drinks`);
    return result.data;
  }
}

export default SnackOrBoozeApi;
