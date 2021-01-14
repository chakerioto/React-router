import './App.css';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Shop() {
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetchItems();
  }, []);

  //   const fetchItems = async () => {
  //     const data = await fetch('https://dog.ceo/api/breeds/list/all');
  //     const items1 = await data.json();
  //     setItems(items1);
  //   };

  const fetchItems = async () => {
    const data = await fetch('https://dog.ceo/api/breeds/list/all');
    const item1s = await data.json();
    setItems(item1s.message.hound);
  };

  return (
    <div className="Shop">
      <ul>
        {items.map(el => (
          <li key={el.id}>
            <Link to={`/shop/${el.id}`}>{el}</Link>
          </li>
        ))}
      </ul>
      <div></div>
    </div>
  );
}

export default Shop;
