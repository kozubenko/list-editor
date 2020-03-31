import React, { FC, useState, useCallback } from "react";
import ListItem, { ListItemI } from "../ListItem";
import AddItemForm from "../AddItemForm";

const List: FC = () => {
  const [items, setItems] = useState<Array<ListItemI>>([]);
  const handleAddItem = useCallback(
    (newItem: ListItemI) => {
      setItems(items => [newItem, ...items]);
    },
    [items]
  );

  return (
    <ul>
      {items.map(item => (
        <ListItem {...item} key={item.title} />
      ))}
      <li>
        <AddItemForm handleAddItem={handleAddItem} />
      </li>
    </ul>
  );
};

export { List };
