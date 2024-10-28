import { SortOrder } from "../../util/SortOrder";

export type TweetOrderByInput = {
  accountId?: SortOrder;
  content?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
};
