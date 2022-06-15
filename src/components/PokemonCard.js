import React, { useState } from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({ name, hp, sprites }) {
  const [isFront, setIsFront] = useState(true);
  const capitalName = name[0].toUpperCase() + name.slice(1);

  function handleClick(e) {
    setIsFront(!isFront);
  }

  return (
    <Card>
      <div onClick={handleClick}>
        <div className="image">
          <img alt="oh no!" src={isFront ? sprites.front : sprites.back} />
        </div>
        <div className="content">
          <div className="header">{capitalName}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {hp} hp
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
