import React from "react";
import { Card, Image } from "semantic-ui-react";

const CardExampleCard = ({ avatar, name, userName }) => (
  
  <div className="card">
    <Card>
        <Image
        src={avatar}
        wrapped
        ui={false}
        />
        <Card.Content>
            <Card.Header>{name}</Card.Header>
        {/* <Card.Meta>
            <span className="date">Joined in 2015</span>
        </Card.Meta> */}
        <Card.Description>
            {userName}
        </Card.Description>
        </Card.Content>
    
    </Card>
  </div>
);

export default CardExampleCard;
