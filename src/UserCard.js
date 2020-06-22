import React from "react";
import { Card, Image } from "semantic-ui-react";

const CardExampleCard = ({ avatar, name, location, userName, bio, repos }) => (
  <div className="card">
    <Card>
      <Image src={avatar} wrapped ui={false} />
      <Card.Content>
        <Card.Header>{name}</Card.Header>
        <Card.Header>{bio}</Card.Header>
        <Card.Meta>
          <span className="date" i class="fa fa-map-marker">
            {location}
          </span>
        </Card.Meta>
      </Card.Content>
      <Card.Content extra>
        <Card.Description>Username - {userName}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <Card.Description>Public repos - {repos}</Card.Description>
      </Card.Content>
    </Card>
  </div>
);

export default CardExampleCard;
