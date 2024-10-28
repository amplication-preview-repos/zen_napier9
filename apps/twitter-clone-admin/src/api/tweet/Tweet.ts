import { Account } from "../account/Account";
import { Like } from "../like/Like";

export type Tweet = {
  account?: Account | null;
  content: string | null;
  createdAt: Date;
  id: string;
  likes?: Array<Like>;
  updatedAt: Date;
};
