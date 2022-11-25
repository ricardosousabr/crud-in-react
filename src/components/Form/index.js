import { useState } from "react";

export default function Form() {
  const [valueInput, setValueInput] = useState("");

  function insertValue() {
    const list = document.querySelector("ul");
    const item = document.createElement("li");

    item.innerHTML = valueInput;
    list.appendChild(item);
  }

  return (
    <>
      <div>
        <form>
          <input type="text" onChange={(e) => setValueInput(e.target.value)} />
          <button>click</button>
        </form>
        <button onClick={insertValue}>click</button>
      </div>
      <div>
        <ul></ul>
      </div>
    </>
  );
}
