import React, { useState } from 'react';
import "./List.css"
import ListItem from "./ListItem";

function List() {
  const [trolls, setTrolls] = useState({});

  return (
    <div className="list-container">
      <h2 className="list-header">My Trolls for Ryan in 2021</h2>
      <input placeholder="Type a new troll here..." className="list-input"></input>
      <ListItem item="Send Ryan a BLAHAJ" />
      <ListItem item="Heckle Ryan on stream when he concentrating" />
      <ListItem item="Pretend he doesn't exist when he needs something urgent" />
    </div>
  );
}

export default List;
