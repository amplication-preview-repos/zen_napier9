import { AccountWhereUniqueInput } from "../account/AccountWhereUniqueInput";
import { LikeUpdateManyWithoutTweetsInput } from "./LikeUpdateManyWithoutTweetsInput";

export type TweetUpdateInput = {
  account?: AccountWhereUniqueInput | null;
  content?: string | null;
  likes?: LikeUpdateManyWithoutTweetsInput;
};
