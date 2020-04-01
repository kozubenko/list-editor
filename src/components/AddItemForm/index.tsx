import React, { FC, useCallback, useState } from "react";
import { ListItemI } from "../ListItem";

interface AddItemFormI {
  handleAddItem: (item: ListItemI) => void;
  isItemExist: (item: ListItemI) => boolean;
}

const AddItemForm: FC<AddItemFormI> = ({ handleAddItem, isItemExist }) => {
  const [title, setValue] = useState<string>("");
  const showErrorMessage = useCallback(() => {
    alert(
      "We are sorry. Item with same title already exist. Try another please."
    );
  }, []);

  const handleSubmit = useCallback(
    e => {
      e.preventDefault();

      if (isItemExist({ title })) {
        showErrorMessage();
      } else {
        handleAddItem({ title });
      }
      setValue("");
    },
    [title, isItemExist]
  );

  const handleChangeValue = useCallback(({ target: { value: title } }) => {
    setValue(title);
  }, []);

  return (
    <form onSubmit={handleSubmit}>
      <input value={title} onChange={handleChangeValue} />
      <button type="submit" disabled={!title}>
        Add
      </button>
    </form>
  );
};

export default AddItemForm;
