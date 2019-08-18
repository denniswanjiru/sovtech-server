import axios from "axios";

export default {
  Query: {
    categories: async () => {
      const res = await axios.get('https://api.chucknorris.io/jokes/categories')
      return await res.data;
    }
  }
}
