import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { LikeListRelationFilter } from "../like/LikeListRelationFilter";
import { TweetListRelationFilter } from "../tweet/TweetListRelationFilter";

export type AccountWhereInput = {
  bio?: StringNullableFilter;
  email?: StringNullableFilter;
  id?: StringFilter;
  likes?: LikeListRelationFilter;
  tweets?: TweetListRelationFilter;
  username?: StringNullableFilter;
};
