import * as React from "react";
import { List, Datagrid, TextField, EmailField } from "react-admin";
import MyUrlField from "./MyUrlField";

export const UserList = () => (
  <List>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="name" />
      {/* <TextField source="username" /> */}
      <EmailField source="email" />
      {/* <TextField source="address.street" /> */}
      <TextField source="phone" />
      <MyUrlField source="website" target={"_blank"} />
      <TextField source="company.name" />
    </Datagrid>
  </List>
);
