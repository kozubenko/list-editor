import React, { FC, useState, useCallback } from "react";
import List from "../List";

export interface ListItemI {
  title: string;
}

interface ListItemManagePropsI {
  isFirst: boolean;
  isLast: boolean;
  handleRemoveItem: (item: ListItemI) => void;
}

const ListItem: FC<ListItemI & ListItemManagePropsI> = ({
  title,
  isFirst,
  isLast,
  handleRemoveItem
}) => {
  const [showSublist, setShowSublist] = useState(false);
  const handleShowSublist = useCallback(() => {
    setShowSublist(value => !value);
  }, []);
  const handleRemove = useCallback(() => {
    handleRemoveItem({ title });
  }, []);
  return (
    <li>
      <span>{title}</span>

      {!isFirst && <button>&uarr;</button>}
      {!isLast && <button>&darr;</button>}

      {!showSublist && <button onClick={handleShowSublist}>Add Sublist</button>}
      {showSublist && (
        <button onClick={handleShowSublist}>Remove Sublist</button>
      )}

      <button onClick={handleRemove}>Remove</button>
      {showSublist && <List />}
    </li>
  );
};

export default ListItem;
