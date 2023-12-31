import { Header, Form, List, Stats } from "./components/index";
import { useState } from "react";
import "./App.css";

const App = () => {
  const [items, setItems] = useState([
    { id: 1, description: "Passports", quantity: 2, packed: false },
    { id: 2, description: "Socks", quantity: 12, packed: false },
    { id: 3, description: "Charger", quantity: 1, packed: false },
    { id: 4, description: "Sunglasses", quantity: 2, packed: false },
  ]);

  function handleAddItems(item) {
    setItems((items) => [...items, item]); //no mutation of original array
  }

  function handleDeleteItems(id) {
    setItems(items.filter((item) => id !== item.id));
  }

  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function handleClearItems() {
    const confirmed = window.confirm(
      "Are you sure you want to delete all items ?"
    );
    if (confirmed) {
      setItems([]);
    }
  }

  return (
    <div className="app">
      <Header />
      <Form handleAddItems={handleAddItems} />
      <List
        items={items}
        handleDeleteItems={handleDeleteItems}
        handleToggleItem={handleToggleItem}
        handleClearItems={handleClearItems}
      />
      <Stats items={items} />
    </div>
  );
};

export default App;
