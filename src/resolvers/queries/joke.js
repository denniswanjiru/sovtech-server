import axios from "axios";

export default {
  Query: {
    joke: async (_, { cat }) => {
      const res = await axios.get(`https://api.chucknorris.io/jokes/random?category=${cat}`)
      return await res.data;
    }
  }
}