import React from "react";
import { Card, Image } from "semantic-ui-react";

const CardExampleCard = ({ avatar, name, location, userName, bio, repos, blog, url }) => (
  <div className="card">
    <Card>
        <Image src={avatar} wrapped ui={false} />
      <Card.Content>
        <a href={url} wrapped ui={false}>
          <Card.Header style={{fontSize: "20px"}}>{name}</Card.Header>
        </a>
        <Card.Description>{bio}</Card.Description>
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
      <Card.Content extra>
        <Card.Description>{blog}</Card.Description>
      </Card.Content>
    </Card>
  </div>
);

export default CardExampleCard;
