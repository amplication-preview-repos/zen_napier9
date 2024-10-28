import { Like } from "../like/Like";
import { Tweet } from "../tweet/Tweet";

export type Account = {
  bio: string | null;
  createdAt: Date;
  email: string | null;
  id: string;
  likes?: Array<Like>;
  tweets?: Array<Tweet>;
  updatedAt: Date;
  username: string | null;
};
