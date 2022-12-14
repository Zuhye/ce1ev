import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const DB_URL =
  process.env.MONGODB_URL ||
  "mongodb+srv://elice:W8RsZsSX2Xs1ydE4@cluster0.4gz9ij3.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(DB_URL);
const db = mongoose.connection;
// autoIncrement.initialize(db);

db.on("connected", () =>
  console.log("정상적으로 MongoDB 서버에 연결되었습니다.  " + DB_URL)
);

db.on("error", (error) =>
  console.error("\nMongoDB 연결에 실패하였습니다...\n" + DB_URL + "\n" + error)
);

// user-model.js 에서 export { ~~ } 한 모듈을 그대로 다시 export해 줌
// 이렇게 하면, 나중에 import 할 때 코드가 짧아짐
// 예시로, import userModel from '../db/models/user-model' 대신 from '../db' 가 됨
// '../db/index.js' 에서 index.js 는 생략 가능하므로, '../db' 면 됨 (index는 특별한 용어)
export * from "./user-model";
export * from "./product-model";
export * from "./order-model";
export * from "./review-model";
export * from "./post-model";
// export * from "./SelectedProduct-model";
