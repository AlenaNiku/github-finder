import React from "react";
import { Card, Image } from "semantic-ui-react";

const CardExampleCard = ({ avatar, name, location, userName }) => (
  
  <div className="card">
    <Card>
        <Image
        src={avatar}
        wrapped
        ui={false}
        />
        <Card.Content>
            <Card.Header>{name}</Card.Header>
        <Card.Meta>
            <span className="date">Located in {location}</span>
        </Card.Meta>
        <Card.Description>
            {userName}
        </Card.Description>
        </Card.Content>
    
    </Card>
  </div>
);

export default CardExampleCard;
