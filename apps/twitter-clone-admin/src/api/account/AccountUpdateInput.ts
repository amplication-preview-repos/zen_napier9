import { LikeUpdateManyWithoutAccountsInput } from "./LikeUpdateManyWithoutAccountsInput";
import { TweetUpdateManyWithoutAccountsInput } from "./TweetUpdateManyWithoutAccountsInput";

export type AccountUpdateInput = {
  bio?: string | null;
  email?: string | null;
  likes?: LikeUpdateManyWithoutAccountsInput;
  tweets?: TweetUpdateManyWithoutAccountsInput;
  username?: string | null;
};
