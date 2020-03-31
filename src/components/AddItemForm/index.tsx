import React, { FC, useCallback, useState } from "react";
import { ListItemI } from "../ListItem";

interface AddItemFormI {
  handleAddItem: (item: ListItemI) => void;
}

const AddItemForm: FC<AddItemFormI> = ({ handleAddItem }) => {
  const [value, setValue] = useState<string>("");
  const handleSubmit = useCallback(
    e => {
      e.preventDefault();
      handleAddItem({ title: value });
    },
    [value]
  );

  const handleChangeValue = useCallback(({ target: { value } }) => {
    setValue(value);
  }, []);

  return (
    <form onSubmit={handleSubmit}>
      <input onChange={handleChangeValue} />
      <button type="submit" disabled={!value}>
        Add
      </button>
    </form>
  );
};

export default AddItemForm;
