import React, { FC, useState, useCallback } from "react";

import ListItem, { ListItemBaseI } from "../ListItem";
import ListItemForm from "../ListItemForm";

import { swapItemsInArray } from "../../utils/helpers";

const List: FC = () => {
  const [items, setItems] = useState<Array<ListItemBaseI>>([]);

  const handleAddItem = useCallback(
    (newItem: ListItemBaseI) => {
      setItems(items => [...items, newItem]);
    },
    [items]
  );

  const isItemExist = useCallback(
    (newItem: ListItemBaseI) =>
      items.some(item => item.title === newItem.title),
    [items]
  );

  const handleRemoveItem = useCallback((newItem: ListItemBaseI) => {
    setItems(items => items.filter(item => item.title !== newItem.title));
  }, []);

  const handleMoveItemUp = useCallback((swapItem: ListItemBaseI) => {
    setItems(items => {
      const itemIndex = items.findIndex(item => item.title === swapItem.title);

      return swapItemsInArray(items, itemIndex, itemIndex - 1);
    });
  }, []);

  const handleMoveItemDown = useCallback((swapItem: ListItemBaseI) => {
    setItems(items => {
      const itemIndex = items.findIndex(item => item.title === swapItem.title);
      return swapItemsInArray<ListItemBaseI>(items, itemIndex, itemIndex + 1);
    });
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
            handleMoveItemUp={handleMoveItemUp}
            handleMoveItemDown={handleMoveItemDown}
          />
        );
      })}
      <li>
        <ListItemForm handleAddItem={handleAddItem} isItemExist={isItemExist} />
      </li>
    </ul>
  );
};

export default List;
