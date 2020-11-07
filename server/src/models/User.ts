import * as mongoose from "mongoose";
import bcrypt from "bcrypt";

interface UserModel extends mongoose.Document {
  name: string;
  username: string;
  password: string;
  email: string;
  joinDate: string;
}

export const User = mongoose.model<UserModel>(
  "User",
  new mongoose.Schema({
    username: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    joinDate: {
      type: Date,
      default: Date.now,
    },
    favorites: {
      type: [mongoose.Schema.Types.ObjectId],
      ref: "Recipe",
    },
  })
);

/*
User.pre("save", function(next) {
  if (!this.isModified("password")) {
    return next();
  }
  bcrypt.genSalt(10, (err, salt) => {
    if (err) return next(err);

    bcrypt.hash(this.password, salt, (err, hash) => {
      if (err) return next(err);
      this.password = hash;
      next();
    });
  });
});
*/
