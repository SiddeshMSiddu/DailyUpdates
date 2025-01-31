import React from "react";

const ItemList = ({ items }) => {
  return (
    <div>
      <h2>Item List</h2>
      <ul>
        {items.length > 0 ? (
          items.map((item, index) => <li key={index}>{item}</li>)
        ) : (
          <p>No items available.</p>
        )}
      </ul>
    </div>
  );
};

// Example Usage
const App = () => {
  const itemList = ["Apple ", "Banana ", "Cherry ", "Date "];

  return (
    <div>
      <ItemList items={itemList} />
    </div>
  );
};

export default App;
