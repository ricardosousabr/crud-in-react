import { useState } from "react";

import Button from "../Button/index";
import List from "../List/index";

export default function Form() {
  const [valueInput, setValueInput] = useState("");
  const [itemValue, setItemValue] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setValueInput("");
    let copyArray = itemValue;
    copyArray.push(valueInput);
    setItemValue(copyArray);
  };

  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <input type="text" onChange={(e) => setValueInput(e.target.value)} />
          <Button>click</Button>
        </form>
      </div>
      <div>
        <List items={itemValue} />
      </div>
    </>
  );
}

// adicionar o valor do input no array
