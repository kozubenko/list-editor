import React, { FC, useState, useCallback } from "react";
import ListItem, { ListItemI } from "../ListItem";
import AddItemForm from "../AddItemForm";

const List: FC = () => {
  const [items, setItems] = useState<Array<ListItemI>>([]);

  const handleAddItem = useCallback(
    (newItem: ListItemI) => {
      setItems(items => [...items, newItem]);
    },
    [items]
  );

  const isItemExist = useCallback(
    (newItem: ListItemI) => items.some(item => item.title === newItem.title),
    [items]
  );

  const handleRemoveItem = useCallback((newItem: ListItemI) => {
    setItems(items => items.filter(item => item.title !== newItem.title));
  }, []);

  return (
    <ul>
      {items.map((item, idx) => {
        const isFirst = idx === 0;
        const isLast = idx === items.length - 1;

        return (
          <ListItem
            key={item.title}
            title={item.title}
            isFirst={isFirst}
            isLast={isLast}
            handleRemoveItem={handleRemoveItem}
          />
        );
      })}
      <li>
        <AddItemForm handleAddItem={handleAddItem} isItemExist={isItemExist} />
      </li>
    </ul>
  );
};

export default List;