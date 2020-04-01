import React, { FC, useState, useCallback } from "react";
import List from "../List";

export interface ListItemBaseI {
  title: string;
}

interface ListItemManagePropsI {
  isFirst: boolean;
  isLast: boolean;
  handleRemoveItem: (item: ListItemBaseI) => void;
  handleMoveItem: (position: 1 | -1) => (item: ListItemBaseI) => void;
}

const ListItem: FC<ListItemBaseI & ListItemManagePropsI> = ({
  title,
  isFirst,
  isLast,
  handleRemoveItem,
  handleMoveItem
}) => {
  const [showSublist, setShowSublist] = useState(false);

  const handleShowSublist = useCallback(() => {
    setShowSublist(value => !value);
  }, []);

  const handleRemove = useCallback(() => {
    handleRemoveItem({ title });
  }, [title]);

  const handleMoveUp = useCallback(() => {
    handleMoveItem(-1)({ title });
  }, [title]);

  const handleMoveDown = useCallback(() => {
    handleMoveItem(1)({ title });
  }, [title]);

  return (
    <li>
      <span>{title}</span>

      {!isFirst && <button onClick={handleMoveUp}>&uarr;</button>}
      {!isLast && <button onClick={handleMoveDown}>&darr;</button>}

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
