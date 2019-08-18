import axios from "axios";

export default {
  Query: {
    joke: async (_, { cat }, context) => {
      if (!context.authenticated) {
        throw new Error('You must be logged access categories')
      }

      const res = await axios.get(`${process.env.CHUCK_NORRIS_URL}/jokes/random?category=${cat}`);
      return await res.data;
    }
  }
}