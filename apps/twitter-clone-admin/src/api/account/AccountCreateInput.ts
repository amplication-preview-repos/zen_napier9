import { LikeCreateNestedManyWithoutAccountsInput } from "./LikeCreateNestedManyWithoutAccountsInput";
import { TweetCreateNestedManyWithoutAccountsInput } from "./TweetCreateNestedManyWithoutAccountsInput";

export type AccountCreateInput = {
  bio?: string | null;
  email?: string | null;
  likes?: LikeCreateNestedManyWithoutAccountsInput;
  tweets?: TweetCreateNestedManyWithoutAccountsInput;
  username?: string | null;
};
