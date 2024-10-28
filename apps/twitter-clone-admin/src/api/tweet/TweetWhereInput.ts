import { AccountWhereUniqueInput } from "../account/AccountWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { LikeListRelationFilter } from "../like/LikeListRelationFilter";

export type TweetWhereInput = {
  account?: AccountWhereUniqueInput;
  content?: StringNullableFilter;
  id?: StringFilter;
  likes?: LikeListRelationFilter;
};
