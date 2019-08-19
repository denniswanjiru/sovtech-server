import axios from "axios";

export default {
  Query: {
    categories: async (_, args, context) => {
      if (!context.authenticated) {
        throw new Error('You must be logged access categories')
      }

      const res = await axios.get(`${process.env.CHUCK_NORRIS_URL}/jokes/categories`)
      return await res.data;
    }
  }
}
