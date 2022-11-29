import { useState } from "react";

import Button from "../Button/index";

function List({ items }) {
  const listItems = items.map((item) => <li key={item.toString()}>{item}</li>);

  return <ul>{listItems}</ul>;
}

export default function Form() {
  const [valueInput, setValueInput] = useState("");
  const items = [valueInput];

  const handleSubmit = (event) => {
    event.preventDefault();
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
        <List items={items} />
      </div>
    </>
  );
}
