import { model } from "mongoose";
import { UserSchema } from "./schemas/user";

const User = model("users", UserSchema);

export class UserModel {
  async findByEmail(email) {
    const user = await User.findOne({ email });
    return user;
  }

  async findById(userId) {
    const user = await User.findOne({ _id: userId });
    // console.log(user);
    return user;
  }

  async create(userInfo) {
    const createdNewUser = await User.create(userInfo);
    return createdNewUser;
  }

  async findAll() {
    const users = await User.find({});
    return users;
  }

  async update({ userId, update }) {
    const filter = { _id: userId };
    const option = { returnOriginal: false };
    console.log("userModel", update);
    console.log("filter", filter);
    console.log("userId", userId);
    const updatedUser = await User.findOneAndUpdate(filter, update, option);
    return updatedUser;
  }
  async delete(userId) {
    const user = await User.deleteOne({ _id: userId });
    return user;
  }
}

const userModel = new UserModel();

export { userModel };
