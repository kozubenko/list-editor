import React, { FC } from "react";

export interface ListItemI {
  title: string;
}

const ListItem: FC<ListItemI> = ({ title }) => {
  return <li>{title}</li>;
};

export default ListItem;
