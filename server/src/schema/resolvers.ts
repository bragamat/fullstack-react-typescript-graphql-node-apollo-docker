import jwt from "jsonwebtoken";

const createToken = (user, secret, expiresIn) => {
  const { username, email } = user;
  return jwt.sign(
    {
      username,
      email,
    },
    secret,
    { expiresIn }
  );
};

export const resolvers = {
  Query: {
    recipes: async (root, args, { Recipe }) => await Recipe.find(),
    users: async (root, args, { User }) =>
      await User.find({}).then((users) => users),
  },
  Mutation: {
    addRecipe: async (parent, args, { Recipe }) => {
      const newRecipe = await new Recipe(args).save();

      return newRecipe;
    },
    signupUser: async (root, { username, email, password }, { User }) => {
      const user = await User.findOne({ username });
      if (user) {
        throw new Error("User Already exists");
      }

      const newUser = await new User({
        username,
        email,
        password,
      }).save();
      return {
        token: createToken(newUser, "someSecret", "1h"),
      };
    },
  },
};
