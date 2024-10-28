import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { LikeTitle } from "../like/LikeTitle";
import { TweetTitle } from "../tweet/TweetTitle";

export const AccountCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="bio" multiline source="bio" />
        <TextInput label="email" source="email" type="email" />
        <ReferenceArrayInput source="likes" reference="Like">
          <SelectArrayInput
            optionText={LikeTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <ReferenceArrayInput source="tweets" reference="Tweet">
          <SelectArrayInput
            optionText={TweetTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <TextInput label="username" source="username" />
      </SimpleForm>
    </Create>
  );
};
