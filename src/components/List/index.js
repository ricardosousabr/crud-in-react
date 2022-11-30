export default function List({ items }) {
  const listItems = items.map((item) => <li key={item.toString()}>{item}</li>);

  return <ul>{listItems}</ul>;
}
