import { Post } from "./entities/Post";
import { __prod__ } from "./constants";
import path from "path";
import { User } from "./entities/User";

const postgresql = "postgresql" as const;
const lireddit = "lireddit" as const;

export default {
  entities: [Post, User],
  dbName: lireddit,
  type: postgresql,
  debug: !__prod__,
  migrations: {
    path: path.join(__dirname, "./migrations"),
    disableForeignKeys: false,
    pattern: /^[\w-]+\d+\.[tj]s$/,
  },
};
