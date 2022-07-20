import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm({onItemFormSubmit}) {
  const [itemName, setItemName] = useState("");
  const [itemCategory, setItemCategory] = useState("Produce")

  function handleItemChange(event){
    setItemName(event.target.value);
  }
  function handleCategoryChange(event){
    setItemCategory(event.target.value);
  }
  function handleOnSubmit(event){
    event.preventDefault();
    onItemFormSubmit({
      id: uuid(),
      name: itemName,
      category: itemCategory,
    });
  }
  return (
    <form className="NewItem">
      <label>
        Name:
        <input type="text" name="name" onChange={handleItemChange} value={itemName}/>
      </label>

      <label>
        Category:
        <select name="category" onChange={handleCategoryChange} value={itemCategory}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit" onSubmit={handleOnSubmit}>Add to List</button>
    </form>
  );
}

export default ItemForm;