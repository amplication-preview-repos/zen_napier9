import { AccountWhereUniqueInput } from "../account/AccountWhereUniqueInput";
import { LikeCreateNestedManyWithoutTweetsInput } from "./LikeCreateNestedManyWithoutTweetsInput";

export type TweetCreateInput = {
  account?: AccountWhereUniqueInput | null;
  content?: string | null;
  likes?: LikeCreateNestedManyWithoutTweetsInput;
};
