import React, { useState } from 'react';
import "./List.css"
import ListItem from "./ListItem";

function List() {
  const [trolls, setTrolls] = useState([
    "Send Ryan a BLAHAJ",
    "Heckle Ryan on stream when he concentrating",
    "Pretend he doesn't exist when he needs something urgent"
  ]);

  

  const listItems = trolls.map((troll) =>
    <ListItem key={troll} item={troll} />
  );

  function addToTrolls(troll) {
    const currentTrolls = [...trolls]
    currentTrolls.push(troll)
    setTrolls(currentTrolls)
  }

  return (
    <div className="list-container">
      <h2 className="list-header">My Trolls for Ryan in 2021</h2>
      <input placeholder="Type a new troll here..." className="list-input"></input>
      <button onClick={() => addToTrolls("test")}>Add test troll</button>
      {listItems}
    </div>
  );
}

export default List;
